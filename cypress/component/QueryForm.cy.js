import QueryForm from '../../components/QueryForm.vue';
import ContinuousField from '../../components/ContinuousField.vue';
import CategoricalField from '../../components/CategoricalField.vue';

const stubs = {
  'continuous-field': ContinuousField,
  'categorical-field': CategoricalField,
};

const props = {
  nodes: {
    someNode: 'https://someNode.org',
    anotherNode: 'https://anotherNode.org',
  },
  categoricalOptions: {
    Sex: {
      All: null,
      male: 'male',
      female: 'female',
      other: 'other',
    },
    Diagnosis: {
      All: null,
      'Depressive disorder': 'snomed:35489007',
      'Parkinson\'s disease': 'snomed:49049000',
    },
    'Assessment tool': {
      All: null,
      'Cool assessment tool': 'bg:cogAtlas-1234',
    },
    'Imaging modality': {
      All: null,
      'Flow weighted': 'nidm:FlowWeighted',
      'T1 weighted': 'nidm:T1Weighted',
      'T2 weighted': 'nidm:T2Weighted',
    },
  },
};

describe('Query form', () => {
  it('Displays query fields, healthy control checkbox, and submit query button', () => {
    cy.mount(QueryForm, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="node-field"]').should('be.visible');
    cy.get('[data-cy="min-age-field"]').should('be.visible');
    cy.get('[data-cy="max-age-field"]').should('be.visible');
    cy.get('[data-cy="diagnosis-field"]').should('be.visible');
    cy.get('[data-cy="healthy-control-checkbox"]').should('be.visible');
    cy.get('[data-cy="min-num-sessions-field"]').should('be.visible');
    cy.get('[data-cy="assessment-tool-field"]').should('be.visible');
    cy.get('[data-cy="modality-field"]').should('be.visible');
    cy.get('[data-cy="submit-query"]').should('be.visible');
  });
  it('Checks the healthy control checkbox and disables diagnosis field', () => {
    cy.mount(QueryForm, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="healthy-control-checkbox"]').check();
    cy.get('[data-cy="Diagnosis-select"]').should('have.class', 'vs--disabled');
  });
  it('Calls displayToast method', () => {
    cy.mount(QueryForm, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="Min Age-continuous-field-input"]').type(7);
    cy.get('[data-cy="Max Age-continuous-field-input"]').type(3);
    cy.get('[data-cy="submit-query"]').click();
    // See https://stackoverflow.com/questions/71295432/unable-to-see-toast-in-cypress/71301155#71301155
    cy.contains('#b-toaster-top-right', 'The value of maximum age field must be greater than or equal to the value of minimum age field');
  });
  it('Checks the options in the `node field`', () => {
    cy.mount(QueryForm, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="node-field"]').click();
    cy.get('[data-cy="node-field"]').contains('All');
    cy.get('[data-cy="node-field"]').contains('someNode');
    cy.get('[data-cy="node-field"]').contains('anotherNode');
  });
});
