<template>
  <b-container fluid>
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
  async mounted() {
    const diagnosisResponse = await this.$axios.get(`${this.$config.apiQueryURL}attributes/nb:Diagnosis`);
    const diagnosisOptions = diagnosisResponse.data['nb:Diagnosis'].reduce((tempArray, diagnosis) => ({
      ...tempArray,
      [diagnosis.Label]: diagnosis.TermURL,
    }), {});
    diagnosisOptions.All = null;
    this.categoricalOptions.Diagnosis = diagnosisOptions;

    const assessmentResponse = await this.$axios.get(`${this.$config.apiQueryURL}attributes/nb:Assessment`);
    const assessmentOptions = assessmentResponse.data['nb:Assessment'].reduce((tempArray, assessment) => ({
      ...tempArray,
      [assessment.Label]: assessment.TermURL,
    }), {});
    assessmentOptions.All = null;
    this.categoricalOptions['Assessment tool'] = assessmentOptions;

    if (this.isFederationApi) {
      // TODO: write a test for all these fancy things
      const response = await this.$axios.get(`${this.$config.apiQueryURL}nodes/`);
      this.availableNodes = response.data;
      // We need to also add our special "All" node
      // that we use to select all nodes.
      this.availableNodes.push({
        NodeName: 'All',
        ApiURL: undefined,
      });

      // The first time we load the app, we will also check the URL
      // for valid query parameters that refer to selected nodes.
      // If we find any valid query parameters in the URL, then we
      // initialize the apps with these nodes selected!
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
    }
  },
  computed: {
    isFederationApi() {
      // We're naming the computed property isFederationApi (smallcaps API)
      // because vue-linting rules require props to not be capitalized but
      // hyphenated: is-federation-api. This gets converted to isFederationApi.
      // So to keep things consistent, we call it isFederationApi here as well.
      return this.$config.isFederationAPI === undefined ? true : this.$config.isFederationAPI;
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
  },
};
</script>
