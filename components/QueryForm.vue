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
          <b-form-row class="row">
            <b-form-group class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Age lower</label>
                <b-form-input
                  type="number"
                  name="age_lower"
                  step="any"
                  class="numberinput form-control"
                />
              </div>
            </b-form-group>
            <b-form-group class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Age upper</label>
                <b-form-input
                  type="number"
                  name="age_upper"
                  step="any"
                  class="numberinput form-control"
                />
              </div>
            </b-form-group>
          </b-form-row>
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
};
</script>
