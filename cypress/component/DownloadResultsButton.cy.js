import DownloadResultsButton from '../../components/DownloadResultsButton.vue';

const props = {
  results: [
    {
      dataset: 'http://neurobagel.org/vocab/cool-dataset',
      dataset_name: 'cool-dataset',
      num_matching_subjects: 2,
      subject_file_paths: ['cool-path', 'some-cool-path'],
      image_modals: ['http://purl.org/nidash/nidm#T1Weighted', 'http://purl.org/nidash/nidm#T2Weighted'],
    },
    {
      dataset: 'http://neurobagel.org/vocab/not-so-cool-dataset',
      dataset_name: 'not-so-cool-dataset',
      num_matching_subjects: 2,
      subject_file_paths: ['not-so-cool-path', 'some-not-so-cool-path'],
      image_modals: ['http://purl.org/nidash/nidm#FlowWeighted', 'http://purl.org/nidash/nidm#T1Weighted'],
    },

  ],
  downloads: [],
};

describe('Download results button', () => {
  it('Displays the disabled download results button', () => {
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-results-button"]').should('be.visible').should('be.disabled');
  });
  it('Displays the enabled download results button', () => {
    props.downloads = ['cool-dataset'];
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-results-button"]').should('be.visible').should('not.be.disabled');
  });
  it('Displays the toggle results tsv checkbox', () => {
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="toggle-tsv-checkbox"]').should('be.visible');
  });
  it("Changes the download results button's text when the box is checked and unchecked", () => {
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="toggle-tsv-checkbox"]').check();
    cy.get('[data-cy="download-results-button"]').contains('Download Participant-level Results');
    cy.get('[data-cy="toggle-tsv-checkbox"]').uncheck();
    cy.get('[data-cy="download-results-button"]').contains('Download Dataset-level Results');
  });
});
