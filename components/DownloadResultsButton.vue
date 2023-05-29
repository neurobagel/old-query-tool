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
          v-model="toggleCSV"
          class="form-check-input"
          type="checkbox"
        >
        <label
          class="form-label"
        >Toggle Results CSV</label>
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
        {{ toggleDownloadResultsButtonText() }}
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
      toggleCSV: false,
    };
  },
  computed: {
    displayDownloadResultsButton() {
      return !Object.is(this.results, null) && this.results.length !== 0;
    },
  },
  methods: {
    toggleDownloadResultsButtonText() {
      return this.toggleCSV ? 'Download Subject-level Results' : 'Download Dataset-level Results';
    },
    generateCSVString() {
      const csvRows = [];
      const datasets = this.results.filter((res) => this.downloads.includes(res.dataset_name));

      if (this.toggleCSV) {
        const headers = ['DatasetFilePath', 'SubjectID', 'Age', 'Sex', 'Diagnosis', 'SessionID', 'SessionPath', 'NumSessions', 'Modality'];
        csvRows.push(headers);

        datasets.forEach((res) => {
          res.subject_data.forEach((subject) => {
            csvRows.push([
              res.dataset_file_path,
              subject.sub_id,
              subject.age,
              subject.sex,
              subject.diagnosis?.join('  '),
              subject.session_id,
              subject.session_file_path,
              subject.num_sessions,
              subject.image_modal?.join('  '),
            ].join(','));
          });
        });
      } else {
        const headers = ['PortalURI', 'DatasetFilePath', 'DatasetName', 'NumMatchingSubjects', 'AvailableImageModalities'];
        csvRows.push(headers);

        datasets.forEach((res) => {
          csvRows.push([
            res.dataset_portal_uri,
            res.dataset_file_path,
            res.dataset_name,
            res.num_matching_subjects,
            res.image_modals.join('  '),
          ].join(','));
        });
      }

      return csvRows.join('\n');
    },

    downloadResults() {
      const element = document.createElement('a');
      element.setAttribute('href', `data:text/csv;charset=utf-8,
      ${encodeURIComponent(this.generateCSVString())}`);
      element.setAttribute('download', 'results.csv');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();
      document.body.removeChild(element);
    },
  },
};
</script>
