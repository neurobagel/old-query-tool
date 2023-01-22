import AgeField from '../../components/AgeField.vue';

describe('Age field', () => {
  it('Displays two input fields, one for min age and one for max age', () => {
    cy.mount(AgeField);
    cy.get("[data-cy='minAge']").should('be.visible');
    cy.get("[data-cy='maxAge']").should('be.visible');
  });
});
