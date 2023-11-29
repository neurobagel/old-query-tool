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
                  :checked="isChecked"
                  :data-cy="`card-${datasetUuid}-checkbox`"
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
                    :data-cy="`card-${datasetUuid}-dataset`"
                  >
                    {{ titleExpanded ? datasetName : datasetName.slice(0, 60) }}
                    <span
                      v-if="datasetName.length > 60"
                      class="expander"
                      :data-cy="`card-${datasetUuid}-expander`"
                      @click="expandText"
                    >{{ titleExpanded ? '...less' : "...more" }}</span>
                  </h5>
                </b-row>
                <b-row>
                  <b-col cols="6">
                    <p
                      class="card-text"
                      :data-cy="`card-${datasetUuid}-subjects`"
                    >
                      {{ `${numMatchingSubjects} subjects /
                    ${datasetTotalSubjects} total subjects` }}
                    </p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="4">
            <b-row>
              <b-button-toolbar
                class="d-flex flex-column align-items-end"
              >
                <span
                  class="text-right mb-2"
                  :data-cy="`card-${datasetUuid}-node-name`"
                >{{ `from ${nodeName}` }}</span>
                <b-button-group
                  class="float-right"
                >
                  <b-button
                    v-for="modality in sortedFilteredModalities"
                    :key="modality"
                    type="button"
                    class="btn card-modality"
                    :style="modalities[modality].style"
                    :data-cy="`card-${datasetUuid}-modality-${modalities[modality].name}`"
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
    nodeName: {
      type: String,
      required: true,
    },
    datasetUuid: {
      type: String,
      required: true,
    },
    datasetName: {
      type: String,
      required: true,
    },
    datasetTotalSubjects: {
      type: Number,
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
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update-downloads'],
  data() {
    return {
      titleExpanded: false,
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
  computed: {
    sortedFilteredModalities() {
      // We have to do this as the linter screams at us for mutating the prop
      const modalities = this.imageModals;
      return modalities.filter(Boolean).sort();
    },
  },
  methods: {
    updateDownloads(event) {
      this.$emit('update-downloads', this.datasetUuid, event.target.checked);
    },
    expandText() {
      this.titleExpanded = !this.titleExpanded;
    },
  },
};
</script>
<style>
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
  max-width: 100%;
  white-space: normal;
}

.expanded {
  white-space: normal;
}

.expander {
  font-size: 15px !important;
  font-style: italic;
  color: #470A68;
  cursor: pointer;
}
</style>
