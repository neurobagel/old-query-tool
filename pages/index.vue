<template>
  <b-container fluid>
    <b-row class="mx-auto">
      <query-form
        :categorical-options="categoricalOptions"
        :is-federation-api="isFederationAPI"
        :selected-nodes="selectedNodes"
        :available-nodes="availableNodes"
        @update-response="updateResponse"
        @selectNodes="selectNodes"
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
      availableNodes: [],
      selectedNodes: [],
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
          Aneurysm: 'snomed:432119003',
          Aphasia: 'snomed:87486003',
          'Attention deficit hyperactivity disorder': 'snomed:406506008',
          'Autism spectrum disorder': 'snomed:35919005',
          'Bipolar disorder': 'snomed:13746004',
          'Depressive disorder': 'snomed:35489007',
          Dyslexia: 'snomed:59770006',
          Fibromyalgia: 'snomed:203082005',
          'Major depressive disorder': 'snomed:370143000',
          'Mild depression': 'snomed:310495003',
          'Moderate depression': 'snomed:310496002',
          'Obsessive-compulsive disorder': 'snomed:191736004',
          Overweight: 'snomed:238131007',
          'Parkinson\'s disease': 'snomed:49049000',
          'Progressive supranuclear palsy': 'snomed:192976002',
          'Separation anxiety': 'snomed:126943008',
          Schizophrenia: 'snomed:58214004',
          'Specific spelling disorder': 'snomed:268738002',
          'Traumatic brain injury': 'snomed:127295002',
          'Visual impairment': 'snomed:397540003',
        },
        'Assessment tool': {
          All: null,
          'balloon analogue risk task': 'cogatlas:trm_4d559bcd67c18',
          'Barratt Impulsiveness Scale': 'cogatlas:trm_55a6a8e81b7f4',
          'behavioral approach/inhibition systems': 'cogatlas:trm_56a9137d9dce1',
          'big five questionnaire': 'cogatlas:trm_523f5c17d7edb',
          'breath-holding': 'cogatlas:trm_4c898a680e424',
          'Center for Epidemiologic Studies Depression Scale': 'cogatlas:trm_5258346e72223',
          'Comprehensive Test of Phonological Processing': 'cogatlas:trm_526027c99b726',
          'Continuous Performance Task': 'cogatlas:trm_57c0c34e61fdf',
          DOSPERT: 'cogatlas:trm_5696abecf2569',
          'Edinburgh Handedness Inventory': 'cogatlas:tsk_4a57abb949a41',
          'Emotion Regulation Questionnaire': 'cogatlas:trm_56bbead1a7ed4',
          'Eriksen flanker task': 'cogatlas:tsk_4a57abb949a4f',
          'letter number sequencing': 'cogatlas:trm_4c3e0a9576c3b',
          'Kaufman Brief Intelligence Test': 'cogatlas:trm_529ce6ecb35f8',
          'Kirby Delay Discounting Task': 'cogatlas:trm_56bbee951f161',
          'Mini Mental State Examination': 'cogatlas:tsk_4a57abb949bb1',
          'Montreal Cognitive Assessment': 'cogatlas:trm_57964b8a66aed',
          'Motor Screening Task': 'cogatlas:trm_50f72e93ea9e3',
          'multisource interference task': 'cogatlas:trm_4f2419c4a1646',
          'National Adult Reading Test': 'cogatlas:trm_5798f5c57048d',
          'n-back task': 'cogatlas:tsk_4a57abb949bcd',
          'paired associate learning': 'cogatlas:trm_4da88a2a63d97',
          'paired associate recall': 'cogatlas:trm_4c8991e6e8597',
          'Peabody Picture Vocabulary Test': 'cogatlas:trm_5266bebe14d2e',
          'PEBL Perceptual Vigilance Task': 'cogatlas:trm_50b55d8a6da00',
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
          'Structured Clinical Interview for Diagnostic and Statistical Manual of Mental Disorders (DSM-IV)': 'cogatlas:tsk_4a57abb949e35',
          'theory of mind task': 'cogatlas:trm_4c8a8467304e2',
          'Unified Parkinson\'s Disease Rating Scale': 'cogatlas:tsk_4a57abb949ece',
          'UPPS-P Impulsivity Scale': 'cogatlas:trm_56a91a92043bc',
          'Wechsler Abbreviated Scale of Intelligence': 'cogatlas:trm_4b94affc43245',
          'Wechsler Adult Intelligence Scale - Revised': 'cogatlas:tsk_4a57abb949f12',
          'Wechsler Memory Scale Fourth Edition': 'cogatlas:trm_4b94b12bf0eb2',
          'Zuckerman Sensation Seeking Scale': 'cogatlas:trm_56abebfe9aaa3',
        },
        'Imaging modality': {
          All: null,
          'Arterial spin labeling': 'nidm:ArterialSpinLabeling',
          'Diffusion weighted': 'nidm:DiffusionWeighted',
          'Flow weighted': 'nidm:FlowWeighted',
          'T1 weighted': 'nidm:T1Weighted',
          'T2 weighted': 'nidm:T2Weighted',
        },
      },
    };
  },
  async fetch() {
    if (this.isFederationAPI) {
      const response = await this.$axios.get(`${this.$config.apiQueryURL}nodes/`);
      this.availableNodes = response.data;
      // We need to also add out special "All" node
      // that we use to select all nodes.
      this.availableNodes.push({
        NodeName: 'All',
        ApiURL: undefined,
      });

      // The first time we load the app, we will also check the URL
      // for valid query parameters that refer to selected nodes.
      // If we find any valid query parameters in the URL, then we
      // initialize the apps with these nodes selected!
      const { node: nodeName } = this.$route.query;
      console.log('I found query node:', nodeName);
      if (nodeName !== undefined) {
        if (typeof nodeName === 'string') {
          // There is only one node in the URL query parameters
          if (nodeName === 'All') {
            // "All" is a special node name and just means
            // that we select all known nodes
            this.selectedNodes = { All: undefined };
          } else {
            this.selectedNodes = Object.keys(this.availableNodes).includes(nodeName)
              ? { [nodeName]: this.availableNodes[nodeName] }
              : {};
          }
        } else if (typeof nodeName === 'object') {
          // There are multiple nodes in the URL query parameters
          // We don't know if the user provided something silly or
          // a node that we no longer know about, so we need to filter.
          this.selectedNodes = Object.keys(this.availableNodes)
            .filter((availableNodeName) => nodeName.includes(availableNodeName))
            .reduce((newObject, availableNodeName) => Object.assign(
              newObject,
              { [availableNodeName]: this.availableNodes[availableNodeName] },
            ), {});
        }
      }
    } else {
      this.selectedNodes = { All: undefined };
    }
    console.log('after all this, we now have', this.selectedNodes);
  },
  computed: {
    isFederationAPI() {
      return this.$config.isFederationAPI === undefined ? true : this.$config.isFederationAPI;
    },
  },
  methods: {
    updateResponse(results, error) {
      this.results = results;
      this.error = error;
    },
    selectNodes(nodes) {
      console.log('here are the nodes we now have:', nodes);
      // this.selectedNodes = nodes;
    },
  },

};
</script>
