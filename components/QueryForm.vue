<template>
  <b-row class="mx-4">
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
            @update-age="updateAge"
          />
          <b-button
            variant="primary"
            type="submit"
          >
            Query Metadata
          </b-button>
        </b-form>
      </b-row>
    </b-col>
    <b-col
      id="query-results-column"
      cols="10"
    >
      <b-row>
        <h2>Results</h2>
      </b-row>
      <div class="row d-flex justify-content-center">
        <div class="d-flex align-items-center">
          <h3 style="color: gray">
            Click 'Query Metadata' for results
          </h3>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      minAge: null,
      maxAge: null,
      results: [],
    };
  },
  methods: {
    updateAge(minAge, maxAge) {
      this.minAge = minAge;
      this.maxAge = maxAge;
    },
    async submitQuery() {
      const url = process.env.API_QUERY_URL;
      try {
        const resp = await this.$axios.get(url);
        if (resp.statusText === 'OK') {
          this.results = resp.data;
        }
      } catch (err) {
        // TODO Handle situations that may throw an error e.g., when min age > max age
        // could emit an event here and show a "error view" in results or use vuelidate
        // to validate the form before submission
      }
    },
  },
};
</script>
