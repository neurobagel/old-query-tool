import QueryForm from '../../components/QueryForm.vue';
import AgeFields from '../../components/AgeFields.vue';
import CategoricalField from '../../components/CategoricalField.vue';

const stubs = {
  'age-fields': AgeFields,
  'categorical-field': CategoricalField,
};

describe('Query form', () => {
  it('Displays the age and sex fields and submit query button', () => {
    cy.mount(QueryForm, {
      stubs,
    });
    cy.get('[data-cy="age-fields"]').should('be.visible');
    cy.get('[data-cy="sex-field"]').should('be.visible');
    cy.get('[data-cy="modality-field"]').should('be.visible');
    cy.get('[data-cy="submit-query"]').should('be.visible');
  });
});
