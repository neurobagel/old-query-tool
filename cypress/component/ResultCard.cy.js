import ResultCard from '../../components/ResultCard.vue';

const props = {
  datasetUuid: 'http://neurobagel.org/vocab/cool-dataset',
  datasetName: 'cool-dataset',
  numMatchingSubjects: 4,
  imageModals: ['http://purl.org/nidash/nidm#T1Weighted', 'http://purl.org/nidash/nidm#T2Weighted'],
  isChecked: true,
};

describe('Result card', () => {
  it('Displays a card with title, number of subjects, modalities, and checkbox', () => {
    cy.mount(ResultCard, {
      propsData: props,
    });
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-dataset"]').should('be.visible').contains('cool-dataset');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-subjects"]').should('be.visible').contains('4 subjects');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-T1"]').should('be.visible').contains('T1');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-T2"]').should('be.visible').contains('T2');
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-checkbox"]').should('be.visible').should('be.checked');
  });
  it('Emits update-download when a checkbox is checked/unchecked', () => {
    cy.mount(ResultCard, {
      listeners: {
        'update-downloads': cy.spy().as('spy'),
      },
      propsData: props,
    });
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-checkbox"]').uncheck();
    cy.get('@spy').should('have.been.calledWith', 'http://neurobagel.org/vocab/cool-dataset', false);
    cy.get('[data-cy="card-http://neurobagel.org/vocab/cool-dataset-checkbox"]').check();
    cy.get('@spy').should('have.been.calledWith', 'http://neurobagel.org/vocab/cool-dataset', true);
  });
});
