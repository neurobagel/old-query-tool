import { mixedResponse } from '../fixtures/example-responses';

describe('Results TSV', () => {
  it('Removes a newline character from a dataset name in the downloaded dataset-level results file', () => {
    cy.intercept('query/?*', mixedResponse).as('call');
    cy.visit('/');
    cy.get('[data-cy="submit-query"]').click();
    cy.get('[data-cy="select-all"]').check();
    cy.get('[data-cy="download-dataset-level-results-button"]').click();
    cy.readFile('cypress/downloads/dataset-level-results.tsv').should('contain', 'some name');
  });
  it('Removes the unwanted whitespace from the downloaded results files', () => {
    cy.intercept('query/?*', mixedResponse).as('call');
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
    cy.intercept('query/?*', mixedResponse).as('call');
    cy.visit('/');
    cy.get('[data-cy="submit-query"]').click();
    cy.get('[data-cy="select-all"]').check();
    cy.get('[data-cy="download-dataset-level-results-button"]').click();
    cy.get('[data-cy="download-participant-level-results-button"]').click();
    cy.readFile('cypress/downloads/participant-level-results.tsv').then((fileContent) => {
      const rows = fileContent.split('\n');

      const datasetProtected = rows[1];
      const datasetNotProtected = rows[2];

      expect(datasetProtected.split('\t')[7]).to.equal('protected');
      expect(datasetNotProtected.split('\t')[7]).to.equal('/ds000011/sub-04');
    });
  });
});
