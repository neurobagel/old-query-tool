<template>
  <b-col
    id="query-results-column"
    cols="10"
  >
    <b-row>
      <h2>Results</h2>
    </b-row>
    <b-row class="d-flex justify-content-center">
      <div class="d-flex align-items-center">
        <h3
          v-if="Object.is(results, null)"
          style="color: gray"
        >
          Click 'Query Metadata' for results
        </h3>
        <h3
          v-else-if="results.length === 0"
          style="color: gray;"
        >
          No results
        </h3>
      </div>
    </b-row>
    <b-row
      v-if="!Object.is(results, null) && results.length !== 0"
      id="query-controls"
    >
      <b-col cols="7">
        <input
          id="dataset-checkall"
          v-model="selectAll"
          class="form-check-input"
          type="checkbox"
          value=""
          aria-label="..."
          @change="UpdateDownloadSelectAll"
        >
        <label
          for="dataset-checkall"
          class="form-label"
        >Select all datasets</label>
      </b-col>
      <b-col cols="5">
        <div id="summary-stats">
          <p id="summary-stats-table">
            {{ summarizeStats() }}
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row
      v-if="!Object.is(results, null) && results.length !== 0"
      id="card-listbox"
      class="d-flex justify-content-center"
    >
      <b-list-group id="results-list-group">
        <result-card
          v-for="res in results"
          :key="res.id"
          :dataset="res.dataset"
          :dataset-name="res.dataset_name"
          :num-matching-subjects="res.num_matching_subjects"
          :image-modals="res.image_modals"
          :select-all="selectAll"
          @update-download="updateDownload"
        />
      </b-list-group>
    </b-row>
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
          disabled
        >
          <b-icon
            icon="download"
            font-scale="1"
          />
          <a
            id="download-results-link"
            href="#"
          >Download Results</a>
        </b-button>
      </b-row>
    </b-col>
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
  },
  data() {
    return {
      selectAll: false,
      download: [],
    };
  },
  methods: {
    summarizeStats() {
      let datasets = 0;
      let subjects = 0;
      this.results.forEach((res) => {
        datasets += 1;
        subjects += res.num_matching_subjects;
      });
      return `Summary stats: ${datasets} datasets, ${subjects} subjects`;
    },
    UpdateDownloadSelectAll() {
      if (this.selectAll) {
        this.results.forEach((result) => {
          if (!this.download.includes(result.dataset_name)) {
            this.download.push(result.dataset_name);
          }
        });
      } else {
        this.download = [];
      }
    },
    updateDownload(datasetName, checked) {
      if (checked) {
        this.download.push(datasetName);
      } else {
        this.download = this.download.filter((item) => item !== datasetName);
      }
    },
  },

};
</script>
