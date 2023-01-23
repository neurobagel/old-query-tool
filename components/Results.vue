<template>
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
          v-if="Object.is(results, null)"
          style="color: gray"
        >
          Click 'Query Metadata' for results
        </h3>
        <h3
          v-else-if="results.length === 0"
          style="color: gray;"
        >
          No results
        </h3>
        <div v-else>
          {{ results }}
        </div>
      </div>
    </b-row>
  </b-col>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: false,
      default: null,
    },
  },

};
</script>
