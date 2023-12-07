<template>
  <b-col
    cols="12"
    md="4"
    xl="2"
  >
    <b-row>
      <h5>Query fields</h5>
    </b-row>
    <b-row>
      <b-form @submit.prevent="validateQueryForm">
        <b-form-row class="row">
          <div
            v-if="isFederationApi"
          >
            <label class="form-label">
              Neurobagel Graph
            </label>
            <v-select
              :value="selectedNodes"
              data-cy="node-field"
              :options="availableNodes"
              multiple
              label="NodeName"
              @input="$emit('selectNodes', $event)"
            />
          </div>
          <b-form-group class="col-md-6">
            <continuous-field
              name="Min Age"
              data-cy="min-age-field"
              step="any"
              @update-continuous-field="updateField"
            />
          </b-form-group>
          <b-form-group class="col-md-6">
            <continuous-field
              name="Max Age"
              data-cy="max-age-field"
              step="any"
              @update-continuous-field="updateField"
            />
          </b-form-group>
        </b-form-row>
        <categorical-field
          name="Sex"
          data-cy="sex-field"
          :default-selected="Object.keys(categoricalOptions.Sex)[0]"
          :options="Object.keys(categoricalOptions.Sex)"
          @update-categorical-field="updateField"
        />
        <categorical-field
          name="Diagnosis"
          data-cy="diagnosis-field"
          default-selected="All"
          :options="Object.keys(categoricalOptions.Diagnosis)"
          :disabled="is_control"
          @update-categorical-field="updateField"
        >
          <template #control>
            <b-form-group class="col-md-7">
              <div
                v-b-tooltip.hover.right="'Checking the healthy control checkbox \
              disables the diagnosis field because we do not support queries \
              for healthy controls with secondary diagnoses'"
              >
                <input
                  id="healthy-control-checkbox"
                  v-model="is_control"
                  data-cy="healthy-control-checkbox"
                  class="form-check-input"
                  type="checkbox"
                >
                <label
                  for="healthy-control-checkbox"
                  class="form-label"
                >Healthy control</label>
              </div>
            </b-form-group>
          </template>
        </categorical-field>
        <continuous-field
          min="1"
          name="Minimum number of sessions"
          data-cy="min-num-sessions-field"
          step="1"
          @update-continuous-field="updateField"
        />
        <categorical-field
          name="Assessment tool"
          data-cy="assessment-tool-field"
          default-selected="All"
          :options="Object.keys(categoricalOptions['Assessment tool'])"
          @update-categorical-field="updateField"
        />
        <categorical-field
          name="Imaging modality"
          data-cy="modality-field"
          :default-selected="Object.keys(categoricalOptions['Imaging modality'])[0]"
          :options="Object.keys(categoricalOptions['Imaging modality'])"
          @update-categorical-field="updateField"
        />
        <b-button
          class="nb-button"
          type="submit"
          data-cy="submit-query"
        >
          <b-spinner
            v-if="isFetching"
            small
          />
          Submit Query
        </b-button>
      </b-form>
    </b-row>
  </b-col>
</template>

<script>
export default {
  props: {
    categoricalOptions: {
      type: Object,
      required: true,
    },
    isFederationApi: {
      type: Boolean,
      default: true,
    },
    availableNodes: {
      type: Array,
      default: () => [],
    },
    selectedNodes: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update-response', 'select-nodes'],
  data() {
    return {
      minAge: null,
      maxAge: null,
      sex: null,
      diagnosis: null,
      is_control: false,
      min_num_sessions: null,
      assessment: null,
      modality: null,
      isFetching: false,
    };
  },
  computed: {
    apiQueryURL() {
      const url = this.$config.apiQueryURL;
      return url.endsWith('/') ? `${url}query/?` : `${url}/query/?`;
    },
  },
  mounted() {
    if (Object.keys(this.categoricalOptions.Diagnosis).length <= 1) {
      this.displayToast('Failed to retrieve diagnosis options');
    }
    if (Object.keys(this.categoricalOptions['Assessment tool']).length <= 1) {
      this.displayToast('Failed to retrieve assessment tool options');
    }
  },
  methods: {
    updateField(name, input) {
      switch (name) {
        case 'Min Age':
          this.minAge = input;
          break;
        case 'Max Age':
          this.maxAge = input;
          break;
        case 'Sex':
          this.sex = this.categoricalOptions[name][input];
          break;
        case 'Diagnosis':
          this.diagnosis = this.categoricalOptions[name][input];
          break;
        case 'Minimum number of sessions':
          this.min_num_sessions = input;
          break;
        case 'Assessment tool':
          this.assessment = this.categoricalOptions[name][input];
          break;
        case 'Imaging modality':
          this.modality = this.categoricalOptions[name][input];
          break;
        default:
          break;
      }
    },
    displayToast(message) {
      this.$bvToast.toast(message, {
        appendToast: true,
        autoHideDelay: '5000',
        noCloseButton: true,
        solid: true,
        title: 'Error',
        variant: 'danger',
      });
    },
    validateQueryForm() {
      if (this.minAge && this.maxAge && Number(this.minAge) > Number(this.maxAge)) {
        this.displayToast('The value of maximum age field must be greater than or equal to the value of minimum age field');
      } else {
        this.submitQuery();
      }
    },
    constructQueryURL() {
      const queryParams = {};
      if (this.isFederationApi && this.selectedNodes.length > 0) {
        this.selectedNodes.forEach((node) => {
          if (node.NodeName !== 'All') {
            queryParams.node_url = node.ApiURL;
          }
        });
      }
      queryParams.min_age = this.minAge;
      queryParams.max_age = this.maxAge;
      queryParams.sex = this.sex;
      queryParams.diagnosis = this.diagnosis && !this.is_control ? this.diagnosis : null;
      queryParams.is_control = this.is_control || null;
      queryParams.min_num_sessions = this.min_num_sessions;
      queryParams.assessment = this.assessment;
      queryParams.image_modal = this.modality;

      Object.keys(queryParams).forEach((key) => {
        if (queryParams[key] === null || queryParams[key] === undefined) {
          delete queryParams[key];
        }
      });
      const searchParams = new URLSearchParams(queryParams).toString();
      return `${this.apiQueryURL}${searchParams}`;
    },
    async submitQuery() {
      this.isFetching = true;

      const url = this.constructQueryURL();

      try {
        const resp = await this.$axios.get(url);
        this.$emit('update-response', resp.data, null);
      } catch (err) {
        this.$emit('update-response', null, 'Oops, something went wrong');
      }
      this.isFetching = false;
    },
  },
};
</script>
