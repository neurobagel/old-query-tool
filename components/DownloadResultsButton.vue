<template>
  <b-col
    v-if="displayDownloadResultsButton"
    class="d-flex flex-row-reverse"
    style="margin-top: 1em;"
  >
    <b-row>
      <div class="d-flex">
        <b-button
          class="nb-button"
          :disabled="downloads.length === 0"
          data-cy="download-participant-level-results-button"
          @click="downloadResults('participant-level')"
        >
          <b-icon
            icon="download"
            font-scale="1"
          />
          Download Participant-level Results
        </b-button>

        <b-button
          class="nb-button download-dataset-level-results-button"
          :disabled="downloads.length === 0"
          data-cy="download-dataset-level-results-button"
          @click="downloadResults('dataset-level')"
        >
          <b-icon
            icon="download"
            font-scale="1"
          />
          Download Dataset-level Results
        </b-button>
      </div>
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
  computed: {
    displayDownloadResultsButton() {
      return !Object.is(this.results, null) && this.results.length !== 0;
    },
  },
  methods: {
    generateTSVString(buttonIdentifier) {
      const tsvRows = [];
      const datasets = this.results.filter((res) => this.downloads.includes(res.dataset_name));

      if (buttonIdentifier === 'participant-level') {
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

    downloadResults(buttonIdentifier) {
      const element = document.createElement('a');
      element.setAttribute('href', `data:text/tab-separated-values;charset=utf-8,
      ${encodeURIComponent(this.generateTSVString(buttonIdentifier))}`);
      if (buttonIdentifier === 'participant-level') {
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
