import ResultsContainer from '../../components/ResultsContainer.vue';
import ResultCard from '../../components/ResultCard.vue';
import DownloadResultsButton from '../../components/DownloadResultsButton.vue';

const stubs = {
  'result-card': ResultCard,
  'download-results-button': DownloadResultsButton,
};

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
};

describe('Results', () => {
  it('Displays error view of results container component', () => {
    cy.mount(ResultsContainer, {
      propsData: {
        results: null,
        error: 'Cool error',
      },
    });
    cy.get('[data-cy="error-view"]').should('be.visible').contains('Cool error');
  });
  it('Displays the default view if no query has been executed yet i.e., results is null', () => {
    cy.mount(ResultsContainer);
    cy.get('[data-cy="default-view"]').should('be.visible');
  });
  it('Displays the no results view if results is empty and there is no error i.e., error is null', () => {
    cy.mount(ResultsContainer, {
      propsData: {
        results: [],
      },
    });
    cy.get('[data-cy="no-results-view"]').should('be.visible');
  });
  it('Checks and unchecks select all checkbox', () => {
    cy.mount(ResultsContainer, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="select-all"]').should('be.visible').check().should('be.checked');
    cy.get('[data-cy="card-cool-dataset-checkbox"]').should('be.checked');
    cy.get('[data-cy="card-not-so-cool-dataset-checkbox"]').should('be.checked');
    cy.get('[data-cy="select-all"]').uncheck().should('not.be.checked');
    cy.get('[data-cy="card-cool-dataset-checkbox"]').should('not.be.checked');
    cy.get('[data-cy="card-not-so-cool-dataset-checkbox"]').should('not.be.checked');
  });
  it('Displays the summary stats', () => {
    cy.mount(ResultsContainer, {
      propsData: props,
    });
    cy.get('[data-cy="summary-stats"]').should('be.visible').contains('Summary stats: 2 datasets, 4 subjects');
  });
  it('Displays a result card for each dataset in results prop', () => {
    cy.mount(ResultsContainer, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="cool-dataset"]').should('be.visible');
    cy.get('[data-cy="not-so-cool-dataset"]').should('be.visible');
  });
  it('Displays download results button (and its component) and enables/disables it by checking/unchecking checkboxes', () => {
    cy.mount(ResultsContainer, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="download-results"]').should('be.visible');
    cy.get('[data-cy="download-results-button"]').should('be.disabled');
    cy.get('[data-cy="select-all"]').check();
    cy.get('[data-cy="download-results-button"]').should('not.be.disabled');
    cy.get('[data-cy="card-cool-dataset-checkbox"]').uncheck();
    cy.get('[data-cy="download-results-button"]').should('not.be.disabled');
    cy.get('[data-cy="card-not-so-cool-dataset-checkbox"]').uncheck();
    cy.get('[data-cy="download-results-button"]').should('be.disabled');
  });
});
