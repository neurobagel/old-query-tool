import QueryForm from '../../components/QueryForm.vue';
import ContinuousField from '../../components/ContinuousField.vue';
import CategoricalField from '../../components/CategoricalField.vue';

const stubs = {
  'continuous-field': ContinuousField,
  'categorical-field': CategoricalField,
};

const props = {
  availableNodes: [
    {
      NodeName: 'someNode',
      NodeURL: 'https://someNode.org',
    },
    {
      NodeName: 'anotherNode',
      NodeURL: 'https://anotherNode.org',
    },
  ],
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
  isFederationApi: true,
};

describe('Query form', () => {
  it('Displays node-select, query fields, healthy control checkbox, and submit query button', () => {
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

  it('Hides the node-select field when isFederationApi is false', () => {
    cy.mount(QueryForm, {
      stubs,
      propsData: {
        ...props,
        isFederationApi: false,
      },
    });
    cy.get('[data-cy="node-field"]').should('not.exist');
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

  it('Populates the node-select field with nodes that can be selected', () => {
    cy.mount(QueryForm, {
      stubs,
      propsData: props,
    });
    cy.get('[data-cy="node-field"]').click();
    cy.get('[data-cy="node-field"]').should('contain', 'someNode');
    cy.get('[data-cy="node-field"]').should('contain', 'anotherNode');
  });

  it('Emits new-selection event when a new node is selected', () => {
    const emitSpy = cy.spy().as('emitSpy');
    cy.mount(QueryForm, {
      stubs,
      propsData: props,
      listeners: {
        selectNodes: emitSpy,
      },
    });
    cy.get('[data-cy="node-field"]').type('someNode');
    cy.get('[data-cy="node-field"]').type('{enter}');
    cy.get('@emitSpy').should(
      'have.been.calledWith',
      [
        {
          NodeName: 'someNode',
          NodeURL: 'https://someNode.org',
        },
      ],
    );
  });

  it('Renders selected nodes', () => {
    cy.mount(QueryForm, {
      stubs,
      propsData: {
        selectedNodes: [
          {
            NodeName: 'anotherNode',
            NodeURL: 'https://anotherNode.org',
          },
        ],
        ...props,
      },
    });

    cy.get('[data-cy="node-field"]').should('contain', 'anotherNode');
  });

  it('Appends a slash to the apiQueryURL if it does not end with a slash', () => {
    const getStub = cy.stub().resolves({ data: 'mock response' });

    cy.mount(QueryForm, {
      stubs,
      propsData: {
        selectedNodes: [
          {
            NodeName: 'anotherNode',
            NodeURL: 'https://anotherNode.org',
          },
        ],
        ...props,
      },
      mocks: {
        $config: {
          apiQueryURL: 'http://my.site.org',
        },
        $axios: {
          get: getStub,
        },
      },
    });
    cy.get('[data-cy=submit-query]').click();
    cy.wrap(getStub).should('have.been.calledWith', 'http://my.site.org/query/?&node_url=undefined');
  });

  it('Does not append extra slash to the apiQueryURL if it ends with a slash', () => {
    const getStub = cy.stub().resolves({ data: 'mock response' });

    cy.mount(QueryForm, {
      stubs,
      propsData: {
        selectedNodes: [
          {
            NodeName: 'anotherNode',
            NodeURL: 'https://anotherNode.org/',
          },
        ],
        ...props,
      },
      mocks: {
        $config: {
          apiQueryURL: 'http://my.site.org',
        },
        $axios: {
          get: getStub,
        },
      },
    });
    cy.get('[data-cy=submit-query]').click();
    cy.wrap(getStub).should('have.been.calledWith', 'http://my.site.org/query/?&node_url=undefined');
  });
  it('Displays a toast when diagnosis and assessment tool options are not retrieved', () => {
    props.categoricalOptions.Diagnosis = { All: null };
    props.categoricalOptions['Assessment tool'] = { All: null };
    cy.mount(QueryForm, {
      stubs,
      propsData: props,
    });
    cy.contains('#b-toaster-top-right', 'Failed to retrieve diagnosis options');
    cy.contains('#b-toaster-top-right', 'Failed to retrieve assessment tool options');
  });
});
