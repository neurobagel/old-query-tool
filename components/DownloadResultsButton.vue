<template>
  <b-col
    v-if="displayDownloadResultsButton"
    class="d-flex flex-row-reverse"
    style="margin-top: 1em;"
  >
    <b-row
      class="flex-column"
    >
      <b-col>
        <input
          v-model="toggleResultsTSV"
          data-cy="toggle-tsv-checkbox"
          class="form-check-input"
          type="checkbox"
        >
        <label
          class="form-label"
        >Toggle level of detail to download</label>
      </b-col>

      <b-button
        id="download-results-button"
        :disabled="downloads.length === 0"
        data-cy="download-results-button"
        @click="downloadResults"
      >
        <b-icon
          icon="download"
          font-scale="1"
        />
        {{ toggleDownloadResultsButtonText }}
      </b-button>
    </b-row>
  </b-col>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      default: () => [],
    },
    downloads: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      toggleResultsTSV: false,
    };
  },
  computed: {
    displayDownloadResultsButton() {
      return !Object.is(this.results, null) && this.results.length !== 0;
    },
    toggleDownloadResultsButtonText() {
      return this.toggleResultsTSV ? 'Download Participant-level Results' : 'Download Dataset-level Results';
    },
  },
  methods: {
    generateTSVString() {
      const tsvRows = [];
      const datasets = this.results.filter((res) => this.downloads.includes(res.dataset_name));

      if (this.toggleResultsTSV) {
        const headers = ['DatasetID', 'SubjectID', 'Age', 'Sex', 'Diagnosis', 'Assessment', 'SessionID', 'SessionPath', 'NumSessions', 'Modality'].join('\t');
        tsvRows.push(headers);

        datasets.forEach((res) => {
          res.subject_data.forEach((subject) => {
            tsvRows.push([
              res.dataset_uuid,
              subject.sub_id,
              subject.age,
              subject.sex,
              subject.diagnosis?.join(', '),
              subject.assessment?.join(', '),
              subject.session_id,
              subject.session_file_path,
              subject.num_sessions,
              subject.image_modal?.join(', '),
            ].join('\t'));
          });
        });
      } else {
        const headers = ['DatasetID', 'DatasetName', 'PortalURI', 'NumMatchingSubjects', 'AvailableImageModalities'].join('\t');
        tsvRows.push(headers);

        datasets.forEach((res) => {
          tsvRows.push([
            res.dataset_uuid,
            res.dataset_name.replace('\n', ' '),
            res.dataset_portal_uri,
            res.num_matching_subjects,
            res.image_modals?.join(', '),
          ].join('\t'));
        });
      }

      return tsvRows.join('\n');
    },

    downloadResults() {
      const element = document.createElement('a');
      element.setAttribute('href', `data:text/tab-separated-values;charset=utf-8,
      ${encodeURIComponent(this.generateTSVString())}`);
      if (this.toggleResultsTSV) {
        element.setAttribute('download', 'participant-results.tsv');
      } else {
        element.setAttribute('download', 'dataset-results.tsv');
      }

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();
      document.body.removeChild(element);
    },
  },
};
</script>
