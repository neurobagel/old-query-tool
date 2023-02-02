import ContinuousField from '../../components/ContinuousField.vue';

const props = {
  name: 'Min Age',
};

describe('Continuous field', () => {
  it('Displays an input field and a label for min age', () => {
    cy.mount(ContinuousField, { propsData: props });
    cy.get('[data-cy="continuous-field-input"]').should('be.visible');
    cy.get('[data-cy="continuous-field-label"]').should('be.visible');
  });
  it('Ignores when text is entered into the input field', () => {
    cy.mount(ContinuousField, { propsData: props });
    cy.get('[data-cy="continuous-field-input"]').type('hello').should('have.value', '');
  });
  it('Emits update-continuous-field event when the value for min age and max age are updated', () => {
    cy.mount(ContinuousField, {
      propsData: props,
      listeners: {
        'update-continuous-field': cy.spy().as('spy'),
      },
    });
    cy.get('[data-cy="continuous-field-input"]').type('7');
    cy.get('@spy').should('have.been.calledWith', 'Min Age', '7');
  });
});
