import QueryForm from '../../components/QueryForm.vue';
import AgeFields from '../../components/AgeFields.vue';

const stubs = {
  'age-fields': AgeFields,
};

describe('Query form', () => {
  it('Displays the age fields and submit query button', () => {
    cy.mount(QueryForm, {
      stubs,
    });
    cy.get("[data-cy='age-fields']").should('be.visible');
    cy.get("[data-cy='submit-query']").should('be.visible');
  });
});
