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
          'Acute depression': 'snomed:712823008',
          'Alzheimer\'s disease': 'snomed:26929004',
          Aneurysm: 'snomed:432119003',
          'Anxiety (finding)': 'snomed:48694002',
          'Anxiety disorder': 'snomed:197480006',
          'Attention deficit hyperactivity disorder': 'snomed:406506008',
          'Atypical juvenile parkinsonism': 'snomed:725146001',
          'Autism spectrum disorder': 'snomed:35919005',
          'Bipolar disorder': 'snomed:13746004',
          'Borderline personality disorder': 'snomed:20010003',
          'Concussion injury of brain': 'snomed:110030002',
          'Corticobasal degeneration': 'snomed:18842008',
          'Depressive disorder': 'snomed:35489007',
          'Diffuse Lewy body disease': 'snomed:80098002',
          'Disorder of cardiovascular system': 'snomed:49601007',
          Dyslexia: 'snomed:59770006',
          'Essential tremor': 'snomed:609558009',
          Fibromyalgia: 'snomed:203082005',
          'Functional parkinsonism': 'snomed:724823008',
          'Hearing problem': 'snomed:300228004',
          'Hemiparkinsonism hemiatrophy syndrome': 'snomed:737582007',
          'Major depressive disorder': 'snomed:370143000',
          'Mental disorder': 'snomed:74732009',
          Migraine: 'snomed:37796009',
          'Mild depression': 'snomed:310495003',
          'Moderate depression': 'snomed:310496002',
          'Motor neuron disease': 'snomed:37340000',
          'Multiple system atrophy': 'snomed:230297002',
          'Neuroleptic-induced parkinsonism': 'snomed:72820004',
          'Obsessive-compulsive disorder': 'snomed:191736004',
          Overweight: 'snomed:238131007',
          'Parkinson\'s disease': 'snomed:49049000',
          Schizophrenia: 'snomed:58214004',
          'Separation anxiety': 'snomed:126943008',
          Smoker: 'snomed:77176002',
          'Social phobia': 'snomed:25501002',
          'Specific spelling disorder': 'snomed:268738002',
          'Spinocerebellar ataxia': 'snomed:129609000',
          'Traumatic brain injury': 'snomed:127295002',
          'Vascular parkinsonism': 'snomed:230296006',
          'Visual impairment': 'snomed:397540003',
        },
        'Assessment tool': {
          All: null,
          'balloon analogue risk task': 'cogatlas:trm_4d559bcd67c18',
          'Barratt Impulsiveness Scale': 'cogatlas:trm_55a6a8e81b7f4',
          'behavioral approach/inhibition systems': 'cogatlas:trm_56a9137d9dce1',
          'breath-holding': 'cogatlas:trm_4c898a680e424',
          'Center for Epidemiologic Studies Depression Scale': 'cogatlas:trm_5258346e72223',
          'Comprehensive Test of Phonological Processing': 'cogatlas:trm_526027c99b726',
          DOSPERT: 'cogatlas:trm_5696abecf2569',
          'Edinburgh Handedness Inventory': 'cogatlas:tsk_4a57abb949a41',
          'Emotion Regulation Questionnaire': 'cogatlas:trm_56bbead1a7ed4',
          'letter number sequencing': 'cogatlas:trm_4c3e0a9576c3b',
          'Mini Mental State Examination': 'cogatlas:tsk_4a57abb949bb1',
          'Montreal Cognitive Assessment': 'cogatlas:trm_57964b8a66aed',
          'Motor Screening Task': 'cogatlas:trm_50f72e93ea9e3',
          'multisource interference task': 'cogatlas:trm_4f2419c4a1646',
          'n-back task': 'cogatlas:tsk_4a57abb949bcd',
          'paired associate learning': 'cogatlas:trm_4da88a2a63d97',
          'paired associate recall': 'cogatlas:trm_4c8991e6e8597',
          'Positive and Negative Affect Scale ': 'cogatlas:tsk_4a57abb949d09',
          'Rapid Visual Information Processing': 'cogatlas:trm_50f8516279419',
          'Raven\'s Advanced Progressive Matrices': 'cogatlas:trm_4f24211a03b07',
          'Reaction Time': 'cogatlas:trm_50f84e8ab7af8',
          'Scale for the Assessment of Negative Symptoms': 'cogatlas:trm_55a6a36d9c3f9',
          'Scale for the Assessment of Positive Symptoms': 'cogatlas:trm_55a6cffbcb5f7',
          'spatial working memory task': 'cogatlas:trm_4f2453b806fe1',
          'Stockings of Cambridge Task': 'cogatlas:trm_4da890cf99b9e',
          'stop signal task': 'cogatlas:tsk_4a57abb949e1a',
          'Stroop task': 'cogatlas:tsk_4a57abb949e27',
          'Peabody Picture Vocabulary Test': 'cogatlas:trm_5266bebe14d2e',
          'Unified Parkinson\'s Disease Rating Scale': 'cogatlas:tsk_4a57abb949ece',
          'Wechsler Abbreviated Scale of Intelligence': 'cogatlas:trm_4b94affc43245',
          'Wechsler Adult Intelligence Scale - Revised': 'cogatlas:tsk_4a57abb949f12',
          'Wechsler Memory Scale Fourth Edition': 'cogatlas:trm_4b94b12bf0eb2',
        },
        'Imaging modality': {
          All: null,
          'Arterial spin labeling': 'nidm:ArterialSpinLabeling',
          'Diffusion weighted': 'nidm:DiffusionWeighted',
          EEG: 'nidm:EEG',
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
