<template>
  <b-col
    cols="12"
    md="8"
    xl="10"
  >
    <b-row>
      <h5>Results</h5>
    </b-row>
    <b-row
      v-if="!displayResults"
      class="d-flex justify-content-center"
    >
      <div class="d-flex align-items-center">
        <h5
          v-if="!Object.is(error, null)"
          style="color: gray"
          data-cy="error-view"
        >
          {{ error }}
        </h5>
        <h5
          v-else-if="Object.is(results, null)"
          style="color: gray"
          data-cy="default-view"
        >
          Click 'Submit Query' for results
        </h5>
        <h5
          v-else-if="results.length === 0"
          style="color: gray;"
          data-cy="no-results-view"
        >
          No results
        </h5>
      </div>
    </b-row>
    <b-row
      v-if="displayResults"
      id="query-controls"
    >
      <b-col cols="7">
        <input
          v-model="selectAll"
          class="form-check-input"
          type="checkbox"
          value=""
          data-cy="select-all"
          @change="updateDownloadsSelectAll"
        >
        <label
          for="dataset-checkall"
          class="form-label"
        >Select all datasets</label>
      </b-col>
      <b-col cols="5">
        <div id="summary-stats">
          <p
            data-cy="summary-stats"
          >
            {{ summarizeStats() }}
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row
      v-if="displayResults"
      id="card-listbox"
      class="d-flex justify-content-center"
    >
      <b-list-group id="results-list-group">
        <result-card
          v-for="res in results"
          :key="res.dataset_uuid"
          :dataset-id="res.dataset_uuid"
          :dataset-name="res.dataset_name"
          :num-matching-subjects="res.num_matching_subjects"
          :image-modals="res.image_modals"
          :is-checked="selectAll || downloads.includes(res.dataset_uuid)"
          :data-cy="res.dataset_uuid"
          @update-downloads="updateDownloads"
        />
      </b-list-group>
    </b-row>
    <download-results-button
      :results="results"
      :downloads="downloads"
      data-cy="download-results"
    />
  </b-col>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectAll: false,
      downloads: [],
    };
  },
  computed: {
    displayResults() {
      return !Object.is(this.results, null) && this.results.length !== 0;
    },
  },
  watch: {
    results() {
      this.selectAll = false;
      this.downloads = [];
    },

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
    updateDownloadsSelectAll() {
      if (this.selectAll) {
        this.results.forEach((res) => {
          if (!this.downloads.includes(res.dataset_uuid)) {
            this.downloads.push(res.dataset_uuid);
          }
        });
      } else {
        this.downloads = [];
      }
    },
    updateDownloads(datasetId, checked) {
      if (checked) {
        this.downloads.push(datasetId);
      } else {
        this.downloads = this.downloads.filter((item) => item !== datasetId);
      }
    },
  },
};
</script>
