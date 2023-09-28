const response = [
  {
    records_protected: true,
    dataset_uuid: 'https://someportal.org/datasets/ds0001',
    dataset_file_path: 'https://github.com/somethingDatasets/ds0001.git',
    dataset_name: 'some\nname',
    num_matching_subjects: 3,
    subject_data: [
      {
        session_file_path: '/ds000011/sub-01',
      },
    ],
    image_modals: ['http://purl.org/nidash/nidm#FlowWeighted', 'http://purl.org/nidash/nidm#T1Weighted'],
  },
  {
    records_protected: false,
    dataset_uuid: 'https://someportal.org/datasets/ds0002',
    dataset_file_path: 'https://github.com/somethingDatasets/ds0002.git',
    dataset_name: 'some\ncoolname',
    num_matching_subjects: 5,
    subject_data: [
      {
        sub_id: 'sub-04',
        session_id: 'ses-nb04',
        num_sessions: '1',
        age: '35.0',
        sex: 'http://purl.bioontology.org/ontology/SNOMEDCT/248153007',
        diagnosis: [
          null,
          null,
          null,
        ],
        subject_group: null,
        assessment: [
          null,
        ],
        image_modal: [
          'http://purl.org/nidash/nidm#T2Weighted',
          'http://purl.org/nidash/nidm#T1Weighted',
          'http://purl.org/nidash/nidm#FlowWeighted',
        ],
        session_file_path: '/ds000011/sub-04',
      },
    ],
    image_modals: ['http://purl.org/nidash/nidm#FlowWeighted', 'http://purl.org/nidash/nidm#T1Weighted'],
  },

];

describe('Results TSV', () => {
  it('Removes a newline character from a dataset name in the downloaded dataset-level results file', () => {
    cy.intercept('query/?*', response).as('call');
    cy.visit('/');
    cy.get('[data-cy="submit-query"]').click();
    cy.get('[data-cy="select-all"]').check();
    cy.get('[data-cy="download-dataset-level-results-button"]').click();
    cy.readFile('cypress/downloads/dataset-level-results.tsv').should('contain', 'some name');
  });
  it('Removes the unwanted whitespace from the downloaded results files', () => {
    cy.intercept('query/?*', response).as('call');
    cy.visit('/');
    cy.get('[data-cy="submit-query"]').click();
    cy.get('[data-cy="select-all"]').check();
    cy.get('[data-cy="download-dataset-level-results-button"]').click();
    cy.readFile('cypress/downloads/dataset-level-results.tsv').then((fileContent) => {
      expect(fileContent).to.match(/^DatasetID/);
    });
    cy.get('[data-cy="download-participant-level-results-button"]').click();
    cy.readFile('cypress/downloads/participant-level-results.tsv').then((fileContent) => {
      expect(fileContent).to.match(/^DatasetID/);
    });
  });
  it('Checks whether the protected and unprotected datasets are correctly identified', () => {
    cy.intercept('query/?*', response).as('call');
    cy.visit('/');
    cy.get('[data-cy="submit-query"]').click();
    cy.get('[data-cy="select-all"]').check();
    cy.get('[data-cy="download-dataset-level-results-button"]').click();
    cy.get('[data-cy="download-participant-level-results-button"]').click();
    cy.readFile('cypress/downloads/participant-level-results.tsv').then((fileContent) => {
      const rows = fileContent.split('\n');

      const datasetProtected = rows[1];
      const datasetNotProtected = rows[2];

      expect(datasetProtected.split('\t')[3]).to.equal('protected');
      expect(datasetNotProtected.split('\t')[3]).to.equal('http://purl.bioontology.org/ontology/SNOMEDCT/248153007');
    });
  });
});
