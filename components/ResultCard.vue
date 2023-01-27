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
                  id=""
                  ref="checkbox"
                  class="form-check-input dataset-checkbox"
                  type="checkbox"
                  value=""
                  :checked="selectAll"
                  aria-label="..."
                  :data-cy="`card-${datasetName}-checkbox`"
                  @change="updateDownload"
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
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <b-button-group
                  v-for="modal in imageModals"
                  :key="modal"
                  class="mr-2"
                  role="group"
                  :aria-label="modalities[modal].ariaLabel"
                >
                  <b-button
                    type="button"
                    class="btn card-modality"
                    :style="modalities[modal].style"
                  >
                    {{ modalities[modal].name }}
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
      default: null,
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
  emits: ['update-download'],
  data() {
    return {
      modalities: {
        'http://purl.org/nidash/nidm#T1Weighted': {
          name: 'T1',
          style: 'background-color: rgb(164, 208, 90);',
          ariaLabel: 'First group',
        },
        'http://purl.org/nidash/nidm#T2Weighted': {
          name: 'T2',
          style: 'background-color: rgb(127, 23, 167); color: white;',
          ariaLabel: 'Second group',
        },
        'http://purl.org/nidash/nidm#DiffusionWeighted': {
          name: 'DWI',
          style: 'background-color: rgb(70, 76, 174); color: white;',
          ariaLabel: 'Third group',
        },
        'http://purl.org/nidash/nidm#FlowWeighted':
        {
          name: 'Flow',
          style: 'background-color: rgb(236, 197, 50); color: white;',
          ariaLabel: 'Fourth group',
        },
        'http://purl.org/nidash/nidm#EEG':
        {
          name: 'EEG',
          style: 'background-color:rgb(128, 1, 1); color: white;',
          ariaLabel: 'Fifth group',
        },
      },
      id: this.datasetName,
    };
  },
  methods: {
    updateDownload() {
      this.$emit('update-download', this.datasetName, this.$refs.checkbox.checked);
    },
  },
};
</script>
