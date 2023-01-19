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
        <b-form>
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
    };
  },
  methods: {
    updateAge(minAge, maxAge) {
      this.minAge = minAge;
      this.maxAge = maxAge;
    },
  },
};
</script>
