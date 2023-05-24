import CategoricalField from '../../components/CategoricalField.vue';

const props = {
  name: 'Diagnosis',
  defaultSelected: 'All',
  options: ['All', 'Depressive disorder',
    'Parkinson\'s disease'],
};

describe('Categorical field', () => {
  it('Displays a vue select component with options and a label for diagnosis field', () => {
    cy.mount(CategoricalField, {
      propsData: props,
    });
    cy.get('[data-cy="categorical-field-label"]').contains(props.name);
    cy.get('.vs__selected').contains('All');
    props.options.forEach((option) => {
      cy.get('[data-cy="Diagnosis-select"]').should('be.visible').click();
      cy.get('[data-cy="Diagnosis-select"]').contains(option);
      cy.get('[data-cy="Diagnosis-select"]').type(option);
      cy.get('[data-cy="Diagnosis-select"]').type('{enter}');
      cy.get('.vs__selected').contains(option);
    });
  });
  it('Emits update-categorical-field event when the value for categorical field is updated', () => {
    cy.mount(CategoricalField, {
      listeners: {
        'update-categorical-field': cy.spy().as('spy'),
      },
      propsData: props,
    });
    cy.get('[data-cy="Diagnosis-select"]').type(props.options[2]);
    cy.get('[data-cy="Diagnosis-select"]').type('{enter}');
    cy.get('@spy').should('have.been.calledWith', props.name, props.options[2]);
  });
  it('Displays control slot', () => {
    cy.mount(CategoricalField, {
      propsData: props,
      slots: {
        control: '<p data-cy="control">healthy control</p>',
      },
    });
    cy.get('[data-cy="control"]').should('be.visible').should('have.text', 'healthy control');
  });
});
