import ResultsContainer from '../../components/ResultsContainer.vue';
import ResultCard from '../../components/ResultCard.vue';
import DownloadResultsButton from '../../components/DownloadResultsButton.vue';
import { protectedResponse2 } from '../fixtures/example-responses';

const stubs = {
  'result-card': ResultCard,
  'download-results-button': DownloadResultsButton,
};

const props = {
  results: protectedResponse2,
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
    cy.get('[data-cy="select-all"]').should('be.visible').check();
    cy.get('[data-cy="select-all"]').should('be.checked');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-checkbox"]').should('be.checked');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/not-so-cool-dataset-checkbox"]').should('be.checked');
    cy.get('[data-cy="select-all"]').uncheck();
    cy.get('[data-cy="select-all"]').should('not.be.checked');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-checkbox"]').should('not.be.checked');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/not-so-cool-dataset-checkbox"]').should('not.be.checked');
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
    cy.get('[data-cy="http://neurobagel.org/vocab/cool-dataset"]').should('be.visible');
    cy.get('[data-cy="http://neurobagel.org/vocab/not-so-cool-dataset"]').should('be.visible');
  });
  it('Displays download results buttons (and its component) and enables/disables it by checking/unchecking checkboxes', () => {
    cy.mount(ResultsContainer, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="download-participant-level-results"]').should('be.visible');
    cy.get('[data-cy="download-dataset-level-results"]').should('be.visible');
    cy.get('[data-cy="download-participant-level-results-button"]').should('be.disabled');
    cy.get('[data-cy="download-dataset-level-results-button"]').should('be.disabled');
    cy.get('[data-cy="select-all"]').check();
    cy.get('[data-cy="download-participant-level-results-button"]').should('not.be.disabled');
    cy.get('[data-cy="download-dataset-level-results-button"]').should('not.be.disabled');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-checkbox"]').uncheck();
    cy.get('[data-cy="download-participant-level-results-button"]').should('not.be.disabled');
    cy.get('[data-cy="download-dataset-level-results-button"]').should('not.be.disabled');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/not-so-cool-dataset-checkbox"]').uncheck();
    cy.get('[data-cy="download-participant-level-results-button"]').should('be.disabled');
    cy.get('[data-cy="download-dataset-level-results-button"]').should('be.disabled');
  });
  it('When results do not exist, example usage button and modal are not visible', () => {
    cy.mount(ResultsContainer, {
      stubs,
      propsData: { ...props, results: [] },
    });
    cy.get('[data-cy="example-usage-button"]').should('not.exist');
    cy.get('[data-cy="example-usage-modal"]').should('not.exist');
  });
  it('When results exist, displays example usage button and modal', () => {
    cy.mount(ResultsContainer, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="example-usage-button"]').should('be.visible').click();
    cy.get('[data-cy="example-usage-modal"]').should('be.visible');
    cy.get('[data-cy="example-usage-modal"]').should('contain', 'Please follow the steps below');
    cy.get('[data-cy="example-usage-modal"]').should('contain', 'dataset-level-results.tsv');
    cy.get('[data-cy="example-usage-modal"]').should('contain', 'participant-level-results.tsv');
  });
  it('Displays the modality buttons in correct order', () => {
    cy.mount(ResultsContainer, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="http://neurobagel.org/vocab/not-so-cool-dataset"] > .card > :nth-child(1) > .card-body > :nth-child(1) > .col-4 > .row > .btn-toolbar > .float-right')
      .children()
      .each((childElement, index) => {
        if (index === 0) {
          cy.wrap(childElement).contains('Flow');
        }
        if (index === 1) {
          cy.wrap(childElement).contains('T1');
        }
        if (index === 2) {
          cy.wrap(childElement).contains('T2');
        }
      });
  });
});
