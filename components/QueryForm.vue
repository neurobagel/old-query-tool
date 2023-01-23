<template>
  <b-col
    id="query-fields-column"
    cols="2"
  >
    <b-row>
      <h2>Query fields</h2>
    </b-row>
    <b-row>
      <b-form @submit.prevent="submitQuery">
        <age-field
          data-cy="ageField"
          @update-age="updateAge"
        />
        <b-button
          variant="primary"
          type="submit"
          data-cy="submitQuery"
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
      results: null,
    };
  },
  methods: {
    updateAge(minAge, maxAge) {
      this.minAge = minAge;
      this.maxAge = maxAge;
    },
    async submitQuery() {
      let url = process.env.API_QUERY_URL;
      if (this.minAge) {
        url += `min_age=${this.minAge}`;
      }
      if (this.maxAge) {
        url += `&max_age=${this.maxAge}`;
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
