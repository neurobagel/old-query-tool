import QueryForm from '../../components/QueryForm.vue';
import AgeFields from '../../components/AgeFields.vue';
import CategoricalField from '../../components/CategoricalField.vue';

const stubs = {
  'age-fields': AgeFields,
  'categorical-field': CategoricalField,
};

const props = {
  categoricalOptions: {
    Sex: {
      All: null,
      male: 'male',
      female: 'female',
      other: 'other',
    },
    'Assessment tool': {
      All: null,
      'Cool assessment tool': 'bg:cogAtlas-1234',
    },
    Modality: {
      All: null,
      'Flow weighted': 'nidm:FlowWeighted',
      'T1 weighted': 'nidm:T1Weighted',
      'T2 weighted': 'nidm:T2Weighted',
    },
  },
};

describe('Query form', () => {
  it('Displays query fields and submit query button', () => {
    cy.mount(QueryForm, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="age-fields"]').should('be.visible');
    cy.get('[data-cy="sex-field"]').should('be.visible');
    cy.get('[data-cy="assessment-tool-field"]').should('be.visible');
    cy.get('[data-cy="modality-field"]').should('be.visible');
    cy.get('[data-cy="submit-query"]').should('be.visible');
  });
});
