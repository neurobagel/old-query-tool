<template>
  <b-container fluid>
    <b-row class="mx-4">
      <h1 class="mt-2">
        Query Tool
      </h1>
      <hr class="mt-0 mb-4">
    </b-row>
    <b-row class="mx-4">
      <query-form
        :categorical-options="categoricalOptions"
        @update-response="updateResponse"
      />
      <results-container
        :results="results"
        :error="error"
      />
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      results: null,
      error: null,
      categoricalOptions: {
        Sex: {
          All: null,
          male: 'snomed:248153007',
          female: 'snomed:248152002',
          other: 'snomed:32570681000036106',
        },
        Diagnosis: {
          All: null,
          'Social phobia': 'snomed:25501002',
          'Anxiety disorder': 'snomed:197480006',
          'Separation anxiety': 'snomed:126943008',
          'Traumatic brain injury': 'snomed:127295002',
          'Hearing problem': 'snomed:300228004',
          'Attention deficit hyperactivity disorder': 'snomed:406506008',
          Fibromyalgia: 'snomed:203082005',
          'Disorder of cardiovascular system': 'snomed:49601007',
          'Mental disorder': 'snomed:74732009',
          'Acute depression': 'snomed:712823008',
          Smoker: 'snomed:77176002',
          'Visual impairment': 'snomed:397540003',
          Anxiety: 'snomed:48694002',
          Migraine: 'snomed:37796009',
          'Concussion injury of brain': 'snomed:110030002',
          'Autism spectrum disorder': 'snomed:35919005',
          Dyslexia: 'snomed:59770006',
          'Specific spelling disorder': 'snomed:268738002',
          Schizophrenia: 'snomed:58214004',
          'Borderline personality disorder': 'snomed:20010003',
        },
        'Assessment tool': {
        },
        'Imaging modality': {
          All: null,
          'Diffusion weighted': 'nidm:DiffusionWeighted',
          'Flow weighted': 'nidm:FlowWeighted',
          'T1 weighted': 'nidm:T1Weighted',
          'T2 weighted': 'nidm:T2Weighted',
        },
      },
    };
  },
  methods: {
    updateResponse(results, error) {
      this.results = results;
      this.error = error;
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

/** Vue select */
.vs__clear {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
