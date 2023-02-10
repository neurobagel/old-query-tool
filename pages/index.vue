<template>
  <b-container fluid>
    <b-row class="mx-4">
      <h1 class="mt-2">
        Cohort Definition Tool
      </h1>
      <hr class="mt-0 mb-4">
    </b-row>
    <b-row class="mx-4">
      <query-form
        :categorical-options="categoricalOptions"
        @update-results="updateResults"
      />
      <results-container :results="results" />
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      results: null,
      categoricalOptions: {
        Sex: {
          All: null,
          male: 'male',
          female: 'female',
          other: 'other',
        },
        Diagnosis: {
          All: null,
          'Depressive disorder': 'snomed:35489007',
          'Parkinson\'s disease': 'snomed:49049000',
        },
        'Assessment tool': {
          All: null,
          'Cool assessment tool': 'bg:cogAtlas-1234',
        },
        Modality: {
          All: null,
          'Flow weighted': 'nidm:FlowWeighted',
          'T1 weighted': 'nidm:T1Weighted',
          'T2 weighted': 'nidm:T2Weighted',
        },
      },
    };
  },
  methods: {
    updateResults(results) {
      this.results = results;
    },
  },

};
</script>
<style>
/* Card */

.btn-group {

    padding-right: 0.5em;
}
.btn-toolbar {
    padding-right: 0;
}
.card {

    background-color: rgb(242, 242, 242);
    border-radius: 10px;
    color: black;
}
.card-checkbox {

    padding-right: 0;
}
.card-content {

    padding-left: 0;
}
.card-modality {

    font-size: 1em;
}
.card-text {

    font-size: 1.25em;
}
.card-title {

    font-size: 1.75em;

    /* Ellipsis length truncation */
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* Card list */

#card-listbox {

    border: 1em;
    border-color: gray;
    border-bottom-left-radius:  10px;
    border-bottom-right-radius: 10px;
    height: 65vh;
    overflow-y: auto;
}

#download-results-button {

    background-color: #0d6efd;
    color: white;
}

#query-controls {

    padding-top: 1em;
    padding-bottom: 1em;
}

#results-list-group {

    padding-right: 0;
}

#summary-stats {

    float: right;
}

.toast:not(.show) {
   display: block;
}
</style>
