<template>
  <b-container fluid>
    <b-row class="mx-auto">
      <b-alert
        :show="queryingOpenNeuro"
        variant="dark"
        class="d-flex align-items-center"
        data-cy="openneuro-alert"
      >
        <p>
          The OpenNeuro node is being actively annotated at the participant level and does
          not include all datasets yet. Check back soon to find more data. If you would like
          to contribute annotations for existing OpenNeuro datasets, please get in touch through
          <a
            href="https://github.com/OpenNeuroDatasets-JSONLD/.github/issues"
            target="_blank"
          >GitHub</a>.
        </p>
        <span
          class="dismiss"
          data-cy="dismiss-openenuro-alert"
          @click="dismissAlert"
        >dismiss</span>
      </b-alert>
    </b-row>
    <b-row class="mx-auto">
      <query-form
        :categorical-options="categoricalOptions"
        :is-federation-api="isFederationApi"
        :selected-nodes="selectedNodes"
        :available-nodes="availableNodes"
        @update-response="updateResponse"
        @selectNodes="selectNodes"
      />
      <results-container
        :results="results"
        :error="error"
      />
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      availableNodes: [],
      selectedNodes: [],
      alertDismissed: false,
      results: null,
      error: null,
      categoricalOptions: {
        Sex: {
          All: null,
          male: 'snomed:248153007',
          female: 'snomed:248152002',
          other: 'snomed:32570681000036106',
        },
        Diagnosis: {
        },
        'Assessment tool': {
        },
        'Imaging modality': {
          All: null,
          'Arterial spin labeling': 'nidm:ArterialSpinLabeling',
          'Diffusion weighted': 'nidm:DiffusionWeighted',
          'Flow weighted': 'nidm:FlowWeighted',
          'T1 weighted': 'nidm:T1Weighted',
          'T2 weighted': 'nidm:T2Weighted',
        },
      },
    };
  },
  // According to Nuxt 2 docs https://v2.nuxt.com/docs/components-glossary/fetch/#nuxt--212,
  // fetch hook can be used to get asynchronous data therefore we'll keep all logic related
  // to fetching asynchronous data in this hook.
  async fetch() {
    const apiQueryURL = this.$config.apiQueryURL.endsWith('/') ? `${this.$config.apiQueryURL}` : `${this.$config.apiQueryURL}/`;

    let diagnosisOptions = {};
    try {
      const diagnosisResponse = await this.$axios.get(`${apiQueryURL}attributes/nb:Diagnosis`);
      if (diagnosisResponse.data['nb:Diagnosis'].length === 0) {
        this.displayToast('No diagnosis options were available', 'Info', 'info');
      } else {
        diagnosisOptions = diagnosisResponse.data['nb:Diagnosis'].reduce((tempArray, diagnosis) => ({
          ...tempArray,
          [diagnosis.Label]: diagnosis.TermURL,
        }), {});
      }
    } catch (err) {
      this.displayToast('Failed to retrieve diagnosis options');
    }

    diagnosisOptions.All = null;
    this.categoricalOptions.Diagnosis = diagnosisOptions;

    let assessmentOptions = {};
    try {
      const assessmentResponse = await this.$axios.get(`${apiQueryURL}attributes/nb:Assessment`);
      if (assessmentResponse.data['nb:Assessment'].length === 0) {
        this.displayToast('No assessment tool options were available', 'Info', 'info');
      } else {
        assessmentOptions = assessmentResponse.data['nb:Assessment']?.reduce((tempArray, assessment) => ({
          ...tempArray,
          [assessment.Label]: assessment.TermURL,
        }), {});
      }
    } catch (err) {
      this.displayToast('Failed to retrieve assessment tool options');
    }

    assessmentOptions.All = null;
    this.categoricalOptions['Assessment tool'] = assessmentOptions;

    if (this.isFederationApi) {
      // TODO: write a test for all these fancy things
      const response = await this.$axios.get(`${apiQueryURL}nodes/`);
      this.availableNodes = response.data;
      // We need to also add our special "All" node
      // that we use to select all nodes.
      this.availableNodes.push({
        NodeName: 'All',
        ApiURL: undefined,
      });
    }

    // Since fetchOnServer is set to false, the fetch hook only runs on
    // the client-side and since it makes asynchronous calls, it will lag
    // behind the mounted hook. So we can either move all logic related
    // to updating the route to fetch or use fetchState.pending to make
    // sure mounted hook runs after fetch is done.
    const { node: nodeName } = this.$route.query;
    if (nodeName !== undefined) {
      const availableNodeNames = this.availableNodes.map((node) => node.NodeName);
      if (typeof nodeName === 'string') {
        // There is only one node in the URL query parameters
        if (nodeName === 'All') {
          // "All" is a special node name and just means
          // that we select all known nodes
          this.selectTheAllNode();
        } else {
          this.selectedNodes = availableNodeNames.includes(nodeName)
            ? [{
              NodeName: nodeName,
              ApiURL: this.availableNodes[availableNodeNames.indexOf(nodeName)].ApiURL,
            }]
            : [];
        }
      } else if (typeof nodeName === 'object') {
        // There are multiple nodes in the URL query parameters
        // We don't know if the user provided something silly or
        // a node that we no longer know about, so we need to filter.
        this.selectedNodes = nodeName
          .filter((name) => availableNodeNames.includes(name))
          .map((name) => (
            {
              NodeName: name,
              ApiURL: this.availableNodes[availableNodeNames.indexOf(name)].ApiURL,
            }
          ));
      }
    }

    if (this.selectedNodes.length === 0) {
      this.selectTheAllNode();
    }
  },
  fetchOnServer: false,
  computed: {
    isFederationApi() {
      // We're naming the computed property isFederationApi (smallcaps API)
      // because vue-linting rules require props to not be capitalized but
      // hyphenated: is-federation-api. This gets converted to isFederationApi.
      // So to keep things consistent, we call it isFederationApi here as well.
      return this.$config.isFederationAPI === undefined ? true : this.$config.isFederationAPI;
    },
    queryingOpenNeuro() {
      return (this.selectedNodes.some((node) => node.NodeName === 'OpenNeuro')
      || (this.selectedNodes.some((node) => node.NodeName === 'All') && this.availableNodes.some((node) => node.NodeName === 'OpenNeuro')))
      && !this.alertDismissed;
    },
  },
  watch: {
    selectedNodes(newNode) {
      if (newNode.length > 0) {
        this.$router.push({
          path: this.$route.path,
          query: { ...this.$route.query, node: newNode.map((node) => node.NodeName) },
        });
      } else if (newNode.length === 0) {
        // If all nodes are removed, we default to the "All" node
        this.selectTheAllNode();
      }
    },
  },
  methods: {
    updateResponse(results, error) {
      this.results = results;
      this.error = error;
    },
    selectNodes(nodes) {
      this.selectedNodes = nodes;
    },
    selectTheAllNode() {
      this.selectedNodes = [{ NodeName: 'All', ApiURL: undefined }];
    },
    dismissAlert() {
      this.alertDismissed = true;
    },
    displayToast(message, title = 'Error', variant = 'danger') {
      this.$bvToast.toast(message, {
        appendToast: true,
        autoHideDelay: '5000',
        noCloseButton: true,
        solid: true,
        title,
        variant,
      });
    },
  },
};
</script>
<style>
.dismiss {
  cursor: pointer;
  float: right;
  margin-right: 4px;
}

</style>
