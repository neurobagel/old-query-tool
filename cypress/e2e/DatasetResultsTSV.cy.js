const response = [
  {
    dataset_portal_uri: 'https://someportal.org/datasets/ds0001',
    dataset_file_path: 'https://github.com/somethingDatasets/ds0001.git',
    dataset_name: 'some\nname',
    num_matching_subjects: 3,
    subject_data: [],
    image_modals: ['http://purl.org/nidash/nidm#FlowWeighted', 'http://purl.org/nidash/nidm#T1Weighted'],
  },
];

describe('Dataset results TSV', () => {
  it('Intercepts the request sent to the API and asserts over the request url', () => {
    cy.intercept('query/?*', response).as('call');
    cy.visit('/');
    cy.get('[data-cy="submit-query"]').click();
    cy.get('[data-cy="select-all"]').check();
    cy.get('[data-cy="download-results-button"]').click();
    cy.readFile('cypress/downloads/dataset-results.tsv').should('not.contain', 'some\nname');
  });
});
