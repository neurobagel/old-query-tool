import QueryForm from '../../components/QueryForm.vue';
import AgeField from '../../components/AgeField.vue';

const stubs = {
  'age-field': AgeField,
};

describe('Query form', () => {
  it('Displays the AgeField component and submitQuery button', () => {
    cy.mount(QueryForm, {
      stubs,
    });
    cy.get("[data-cy='ageField']").should('be.visible');
    cy.get("[data-cy='submitQuery']").should('be.visible');
  });
});
