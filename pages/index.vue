<template>
  <b-container fluid>
    <b-row class="mx-4">
      <h1 class="mt-2">
        Cohort Definition Tool
      </h1>
      <hr class="mt-0 mb-4">
    </b-row>
    <b-row class="mx-4">
      <query-form @update-results="updateResults" />
      <results :results="results" />
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      results: null,
    };
  },
  methods: {
    updateResults(results) {
      this.results = results;
    },
  },

};
</script>
