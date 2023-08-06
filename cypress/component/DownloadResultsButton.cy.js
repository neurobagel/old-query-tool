import DownloadResultsButton from '../../components/DownloadResultsButton.vue';

const props = {
  identifier: 'participant-level',
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
  it('Displays the disabled participant-level download results button', () => {
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-participant-level-results-button"]').should('be.visible').should('be.disabled');
  });
  it('Displays the disabled dataset-level download results button', () => {
    props.identifier = 'dataset-level';
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-dataset-level-results-button"]').should('be.visible').should('be.disabled');
  });
  it('Displays the enabled download participant-level results button', () => {
    props.identifier = 'participant-level';
    props.downloads = ['cool-dataset'];
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-participant-level-results-button"]').should('be.visible').should('not.be.disabled');
  });
  it('Displays the enabled download dataset-level results button', () => {
    props.identifier = 'dataset-level';
    props.downloads = ['cool-dataset'];
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-dataset-level-results-button"]').should('be.visible').should('not.be.disabled');
  });
  it('Displays the tooltips when the download participant-level results button is disabled', () => {
    props.downloads = [];
    props.identifier = 'participant-level';
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-participant-level-results-button"]')
      .first()
      .trigger('mouseenter', { force: true });

    cy.get('[data-cy="download-participant-level-results-button-tooltip"]')
      .should('be.visible')
      .trigger('mouseleave');
  });
  it('Displays the tooltips when the download dataset-level results button is disabled', () => {
    props.downloads = [];
    props.identifier = 'dataset-level';
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-dataset-level-results-button"]')
      .first()
      .trigger('mouseenter', { force: true });

    cy.get('[data-cy="download-dataset-level-results-button-tooltip"]')
      .should('be.visible');
  });
});
