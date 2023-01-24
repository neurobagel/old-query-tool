import AgeField from '../../components/AgeField.vue';

describe('Age field', () => {
  it('Displays two input fields, one for min age and one for max age', () => {
    cy.mount(AgeField);
    cy.get("[data-cy='minAge']").should('be.visible');
    cy.get("[data-cy='maxAge']").should('be.visible');
  });
  it('Types text into the age input fields', () => {
    cy.mount(AgeField);
    cy.get("[data-cy='minAge']").type('hello').should('have.value', '');
    cy.get("[data-cy='maxAge']").type('world').should('have.value', '');
  });
  it('Emits update-age event when the value for min age and max age are updated', () => {
    cy.mount(AgeField, {
      listeners: {
        'update-age': cy.spy().as('spy'),
      },
    });
    cy.get("[data-cy='minAge']").type('10');
    cy.get('@spy').should('have.been.calledWith', '10', null);
    cy.get("[data-cy='maxAge']").type('70');
    cy.get('@spy').should('have.been.calledWith', '10', '70');
  });
});
