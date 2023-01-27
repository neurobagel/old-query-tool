<template>
  <b-col
    class="d-flex flex-row-reverse"
    style="margin-top: 1em;"
  >
    <b-row
      v-if="!Object.is(results, null) && results.length !== 0"
      class="mr-auto"
    >
      <b-button
        id="download-results-button"
        :disabled="downloads.length === 0"
        data-cy="download-results-button"
        @click="download"
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
      required: false,
      default: null,
    },
    downloads: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    generateCSVString() {
      const data = [];
      this.results.filter((res) => this.downloads.includes(res.dataset_name)).forEach((res) => {
        res.subject_file_paths.forEach((path) => {
          data.push({
            'dataset ': res.dataset_name,
            'number of matching subjects': res.num_matching_subjects,
            'subject file paths': path,
          });
        });
      });

      const csvRows = [];
      const headers = Object.keys(data[0]);

      csvRows.push(headers.join(','));
      data.forEach((row) => {
        const values = headers.map((header) => {
          const val = row[header];
          return `"${val}"`;
        });
        csvRows.push(values.join(','));
      });

      return csvRows.join('\n');
    },

    download() {
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
