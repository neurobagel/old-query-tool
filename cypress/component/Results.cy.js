import Results from '../../components/Results.vue';
import ResultCard from '../../components/ResultCard.vue';

const stubs = {
  'result-card': ResultCard,
};

describe('Results', () => {
  it('Displays a result card for each dataset in results prop', () => {
    cy.mount(Results, {
      stubs,
      propsData: {
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
      },
    });
    cy.get("[data-cy='cool-dataset']").should('be.visible');
    cy.get("[data-cy='not-so-cool-dataset']").should('be.visible');
  });
});
