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
          :dataset-uuid="res.dataset_uuid"
          :dataset-name="res.dataset_name"
          :num-matching-subjects="res.num_matching_subjects"
          :image-modals="res.image_modals"
          :is-checked="selectAll || downloads.includes(res.dataset_uuid)"
          :data-cy="res.dataset_uuid"
          @update-downloads="updateDownloads"
        />
      </b-list-group>
    </b-row>
    <b-row
      v-if="displayResults"
      style="margin-top: 1em"
    >
      <b-col cols="5">
        <div class="d-flex justify-content-start">
          <b-button
            class="nb-button"
            data-cy="example-usage-button"
            @click="$modal?.show('example-usage-modal')"
          >
            How to get the data
          </b-button>
          <modal
            name="example-usage-modal"
            :height="auto"
            :adaptive="true"
            :resizable="true"
            :reset="true"
            data-cy="example-usage-modal"
          >
            <div style="padding: 1em">
              <h4>Example usage</h4>
              <p>Please follow the steps below</p>
              <ol>
                <li>Select at least one dataset</li>
                <li>Download the participant-level and dataset-level results files</li>
                <li>Change directory to the location of the downloaded files</li>
                <li>Copy and run the following command:</li>
              </ol>
              <code class="code">{{ code }}</code>
              <p>
                The downloaded data will be saved in a directory called
                <code>output</code> in the current directory.
                Note that the output directory will be created
                if it does not exist already.
              </p>
            </div>
          </modal>
        </div>
      </b-col>
      <b-col cols="7">
        <div class="d-flex justify-content-end download-buttons-div">
          <download-results-button
            identifier="participant-level"
            :downloads-is-empty="downloads.length === 0"
            data-cy="download-participant-level-results"
            @download-results="downloadResults"
          />
          <download-results-button
            identifier="dataset-level"
            :downloads-is-empty="downloads.length === 0"
            data-cy="download-dataset-level-results"
            @download-results="downloadResults"
          />
        </div>
      </b-col>
    </b-row>
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
      code: 'docker run -t -v $(pwd):/data neurobagel/dataget:latest /data/dataset-level-results.tsv /data/participant-level-results.tsv /data/output',
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
    updateDownloads(datasetUuid, checked) {
      if (checked) {
        this.downloads.push(datasetUuid);
      } else {
        this.downloads = this.downloads.filter((item) => item !== datasetUuid);
      }
    },
    generateTSVString(buttonIdentifier) {
      const tsvRows = [];
      const datasets = this.results.filter((res) => this.downloads.includes(res.dataset_uuid));

      if (buttonIdentifier === 'participant-level') {
        const headers = ['DatasetID', 'SubjectID', 'Age', 'Sex', 'Diagnosis', 'Assessment', 'SessionID', 'SessionPath', 'NumSessions', 'Modality'].join('\t');
        tsvRows.push(headers);

        datasets.forEach((res) => {
          res.subject_data.forEach((subject) => {
            tsvRows.push([
              res.dataset_uuid,
              res.records_protected ? 'protected' : subject.sub_id,
              res.records_protected ? 'protected' : subject.age,
              res.records_protected ? 'protected' : subject.sex,
              res.records_protected ? 'protected' : subject.diagnosis?.join(', '),
              res.records_protected ? 'protected' : subject.assessment?.join(', '),
              res.records_protected ? 'protected' : subject.session_id,
              subject.session_file_path,
              res.records_protected ? 'protected' : subject.num_sessions,
              res.records_protected ? 'protected' : subject.image_modal?.join(', '),
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

    downloadResults(buttonIdentifier) {
      const element = document.createElement('a');
      const encodedTSV = encodeURIComponent(this.generateTSVString(buttonIdentifier));
      element.setAttribute('href', `data:text/tab-separated-values;charset=utf-8,${encodedTSV}`);
      element.setAttribute('download', `${buttonIdentifier}-results.tsv`);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();
      document.body.removeChild(element);
    },
  },
};
</script>
