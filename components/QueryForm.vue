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
      <b-row class="d-flex justify-content-center">
        <div class="d-flex align-items-center">
          <h3
            v-if="results.length === 0"
            style="color: gray"
          >
            Click 'Query Metadata' for results
          </h3>
          <div v-else>
            {{ results }}
          </div>
        </div>
      </b-row>
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
      } catch (err) {
        // TODO Handle situations that may throw an error e.g., when min age > max age
        // could emit an event here and show an "error view" in results or use vuelidate
        // to validate the form before submission
      }
    },
  },
};
</script>
