<template>
  <b-col
    v-if="displayDownloadResultsButton"
    class="d-flex flex-row-reverse"
    style="margin-top: 1em;"
  >
    <b-row
      class="mr-auto"
    >
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
        Download Results
      </b-button>
    </b-row>
  </b-col>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true,
    },
    downloads: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    displayDownloadResultsButton() {
      return !Object.is(this.results, null) && this.results.length !== 0;
    },
  },
  methods: {
    generateCSVString() {
      const headers = ['dataset', 'number of matching subjects', 'subject file paths'];
      const csvRows = [headers];

      this.results.filter((res) => this.downloads.includes(res.dataset_name))
        .forEach((res) => {
          res.subject_file_paths.forEach((path) => {
            csvRows.push([
              res.dataset_name,
              res.num_matching_subjects,
              path,
            ].join(','));
          });
        });

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
