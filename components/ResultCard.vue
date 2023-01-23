<template>
  <b-list-group-item>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col cols="8">
            <b-row class="d-flex justify-content-center">
              <b-col
                col="1"
                class="d-flex align-items-center card-checkbox"
              >
                <input
                  id=""
                  class="form-check-input dataset-checkbox"
                  type="checkbox"
                  value=""
                  aria-label="..."
                >
              </b-col>
              <b-col
                cols="11"
                class="card-content"
              >
                <b-row>
                  <h5 class="card-title">
                    {{ datasetName }}
                  </h5>
                </b-row>
                <b-row>
                  <b-col cols="6">
                    <p class="card-text">
                      {{ numMatchingSubjects }}
                    </p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="4">
            <b-row id="repo-row">
              <div class="card-dataset-source d-flex justify-content-end">
                <a :href="dataset">{{ "N/A" }}</a>
              </div>
            </b-row>
            <b-row>
              <b-button-toolbar
                class="d-flex justify-content-end"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                {{ "display modalities here" }}
              </b-button-toolbar>
            </b-row>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-list-group-item>
</template>
<script>
export default {
  props: {
    dataset: {
      type: String,
      default: null,
    },
    datasetName: {
      type: String,
      default: null,
    },
    numMatchingSubjects: {
      type: Number,
      default: null,
    },
  },
};
</script>
