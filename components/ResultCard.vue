<template>
  <b-list-group-item>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col cols="8">
            <b-row class="d-flex justify-content-center">
              <b-col
                cols="1"
                class="d-flex align-items-center card-checkbox"
              >
                <input
                  ref="checkbox"
                  class="form-check-input dataset-checkbox"
                  type="checkbox"
                  value=""
                  :checked="selectAll"
                  :data-cy="`card-${datasetName}-checkbox`"
                  @change="updateDownloads"
                >
              </b-col>
              <b-col
                cols="11"
                class="card-content"
              >
                <b-row>
                  <h5
                    class="card-title"
                    :data-cy="`card-${datasetName}-dataset`"
                  >
                    {{ datasetName }}
                  </h5>
                </b-row>
                <b-row>
                  <b-col cols="6">
                    <p
                      class="card-text"
                      :data-cy="`card-${datasetName}-subjects`"
                    >
                      {{ `${numMatchingSubjects} subjects` }}
                    </p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="4">
            <b-row>
              <b-button-toolbar
                class="d-flex justify-content-end"
              >
                <b-button-group
                  v-for="modality in imageModals"
                  :key="modality"
                  class="mr-2"
                >
                  <b-button
                    type="button"
                    class="btn card-modality"
                    :style="modalities[modality].style"
                    :data-cy="`card-${datasetName}-${modalities[modality].name}`"
                  >
                    {{ modalities[modality].name }}
                  </b-button>
                </b-button-group>
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
    datasetName: {
      type: String,
      required: true,
    },
    numMatchingSubjects: {
      type: Number,
      default: null,
    },
    imageModals: {
      type: Array,
      default: null,
    },
    selectAll: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update-downloads'],
  data() {
    return {
      modalities: {
        'http://purl.org/nidash/nidm#ArterialSpinLabeling': {
          name: 'ASL',
          style: 'background-color: rgb(69, 77, 87); color: white;',
        },
        'http://purl.org/nidash/nidm#DiffusionWeighted': {
          name: 'DWI',
          style: 'background-color: rgb(205, 92, 92); color: white;',
        },
        'http://purl.org/nidash/nidm#EEG':
        {
          name: 'EEG',
          style: 'background-color: rgb(216, 191, 216); color: white;',
        },
        'http://purl.org/nidash/nidm#FlowWeighted':
        {
          name: 'Flow',
          style: 'background-color: rgb(70, 130, 180); color: white;',
        },
        'http://purl.org/nidash/nidm#T1Weighted': {
          name: 'T1',
          style: 'background-color: rgb(189, 183, 107);',
        },
        'http://purl.org/nidash/nidm#T2Weighted': {
          name: 'T2',
          style: 'background-color: rgb(143, 188, 143); color: white;',
        },
      },
    };
  },
  methods: {
    updateDownloads() {
      this.$emit('update-downloads', this.datasetName, this.$refs.checkbox.checked);
    },
  },
};
</script>
