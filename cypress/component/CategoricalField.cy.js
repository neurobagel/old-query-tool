import CategoricalField from '../../components/CategoricalField.vue';

const fields = {
  sex: {
    name: 'Sex',
    defaultSelected: 'All',
    options: ['All', 'male', 'female', 'other'],
  },
};

describe('Categorical field', () => {
  it('Displays a vue select component with options and label for sex field', () => {
    cy.mount(CategoricalField, {
      propsData: {
        name: fields.sex.name,
        defaultSelected: fields.sex.defaultSelected,
        options: fields.sex.options,
      },
    });
    cy.get('[data-cy=categorical-field-label]').contains('Sex');
    cy.get('.vs__selected').contains('All');
    fields.sex.options.forEach((option) => {
      cy.get('[data-cy=categorical-field-select]').should('be.visible').click().contains(option);
      cy.get('[data-cy=categorical-field-select]').type(option).type('{enter}');
      cy.get('.vs__selected').contains(option);
    });
  });
});