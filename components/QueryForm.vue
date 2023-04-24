<template>
  <b-col
    cols="2"
  >
    <b-row>
      <h2>Query fields</h2>
    </b-row>
    <b-row>
      <b-form @submit.prevent="validateQueryForm">
        <b-form-row class="row">
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
          :default-selected="Object.keys(categoricalOptions.Diagnosis)[0]"
          :options="Object.keys(categoricalOptions.Diagnosis)"
          :disabled="is_control"
          @update-categorical-field="updateField"
        >
          <template #control>
            <b-form-group class="col-md-7">
              <input
                v-model="is_control"
                data-cy="healthy-control-checkbox"
                class="form-check-input"
                type="checkbox"
              >
              <label class="form-label">Healthy control</label>
            </b-form-group>
          </template>
        </categorical-field>
        <continuous-field
          name="Minimum number of sessions"
          data-cy="min-num-sessions-field"
          step="1"
          @update-continuous-field="updateField"
        />
        <categorical-field
          name="Assessment tool"
          data-cy="assessment-tool-field"
          :default-selected="Object.keys(categoricalOptions['Assessment tool'])[0]"
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
          variant="primary"
          type="submit"
          data-cy="submit-query"
        >
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
  },
  emits: ['update-response'],
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
    };
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
        this.displayToast('Maximum age must be greater than or equal to minimum age');
      } else {
        this.submitQuery();
      }
    },
    async submitQuery() {
      let url = `${process.env.API_QUERY_URL}query/?`;
      if (this.minAge) {
        url += `min_age=${this.minAge}`;
      }
      if (this.maxAge) {
        url += `&max_age=${this.maxAge}`;
      }
      if (this.sex) {
        url += `&sex=${this.sex}`;
      }
      if (this.diagnosis && !this.is_control) {
        url += `&diagnosis=${this.diagnosis}`;
      }
      if (this.is_control) {
        url += `&is_control=${this.is_control}`;
      }
      if (this.min_num_sessions) {
        url += `&min_num_sessions=${this.min_num_sessions}`;
      }
      if (this.assessment) {
        url += `&assessment=${this.assessment}`;
      }
      if (this.modality) {
        url += `&image_modal=${this.modality}`;
      }
      try {
        const resp = await this.$axios.get(url);
        this.$emit('update-response', resp.data, null);
      } catch (err) {
        this.$emit('update-response', null, 'Oops, something went wrong');
      }
    },
  },
};
</script>
