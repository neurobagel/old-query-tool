<template>
  <b-col
    cols="2"
  >
    <b-row>
      <h2>Query fields</h2>
    </b-row>
    <b-row>
      <b-form @submit.prevent="submitQuery">
        <age-fields
          data-cy="age-fields"
          @update-age="updateAge"
        />
        <categorical-field
          name="Sex"
          data-cy="sex-field"
          :default-selected="Object.keys(categoricalOptions.Sex)[0]"
          :options="Object.keys(categoricalOptions.Sex)"
          @update-categorical-field="updateCategoricalField"
        />
        <categorical-field
          name="Modality"
          data-cy="modality-field"
          :default-selected="Object.keys(categoricalOptions.Modality)[0]"
          :options="Object.keys(categoricalOptions.Modality)"
          @update-categorical-field="updateCategoricalField"
        />
        <b-button
          variant="primary"
          type="submit"
          data-cy="submit-query"
        >
          Query Metadata
        </b-button>
      </b-form>
    </b-row>
  </b-col>
</template>

<script>
export default {
  emits: ['update-results'],
  data() {
    return {
      minAge: null,
      maxAge: null,
      sex: null,
      results: null,
      modality: null,
    };
  },
  methods: {
    updateAge(minAge, maxAge) {
      this.minAge = minAge;
      this.maxAge = maxAge;
    },
    updateCategoricalField(name, selected) {
      switch (name) {
        case 'Sex':
          this.sex = this.categoricalOptions[name][selected];
          break;
        case 'Modality':
          this.modality = this.categoricalOptions[name][selected];
          break;
        default:
          break;
      }
    },
    async submitQuery() {
      let url = process.env.API_QUERY_URL;
      if (this.minAge) {
        url += `min_age=${this.minAge}`;
      }
      if (this.maxAge) {
        url += `&max_age=${this.maxAge}`;
      }
      if (this.sex) {
        url += `&sex=${this.sex}`;
      }
      if (this.modality) {
        url += `&image_modal=${this.modality}`;
      }
      try {
        const resp = await this.$axios.get(url);
        this.results = resp.data;
        this.$emit('update-results', this.results);
      } catch (err) {
        // TODO Handle situations that may throw an error e.g., when min age > max age
        // could emit an event here and show an "error view" in results or use vuelidate
        // to validate the form before submission
      }
    },
  },
};
</script>
