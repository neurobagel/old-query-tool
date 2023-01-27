import AgeFields from '../../components/AgeFields.vue';

describe('Age field', () => {
  it('Displays two input fields, one for min age and one for max age', () => {
    cy.mount(AgeFields);
    cy.get("[data-cy='min-age']").should('be.visible');
    cy.get("[data-cy='max-age']").should('be.visible');
  });
  it('Ignores when text is entered into the age input fields', () => {
    cy.mount(AgeFields);
    cy.get("[data-cy='min-age']").type('hello').should('have.value', '');
    cy.get("[data-cy='max-age']").type('world').should('have.value', '');
  });
  it('Emits update-age event when the value for min age and max age are updated', () => {
    cy.mount(AgeFields, {
      listeners: {
        'update-age': cy.spy().as('spy'),
      },
    });
    cy.get("[data-cy='min-age']").type('10');
    cy.get('@spy').should('have.been.calledWith', '10', null);
    cy.get("[data-cy='max-age']").type('70');
    cy.get('@spy').should('have.been.calledWith', '10', '70');
  });
});
