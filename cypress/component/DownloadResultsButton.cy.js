import DownloadResultsButton from '../../components/DownloadResultsButton.vue';

const props = {
  identifier: 'participant-level',
  downloadsIsEmpty: true,
};

describe('Download results button', () => {
  it('Displays the disabled participant-level download results button', () => {
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-participant-level-results-button"]').should('be.visible').should('be.disabled');
  });
  it('Displays the disabled dataset-level download results button', () => {
    props.identifier = 'dataset-level';
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-dataset-level-results-button"]').should('be.visible').should('be.disabled');
  });
  it('Displays the enabled download participant-level results button', () => {
    props.identifier = 'participant-level';
    props.downloadsIsEmpty = false;
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-participant-level-results-button"]').should('be.visible').should('not.be.disabled');
  });
  it('Displays the enabled download dataset-level results button', () => {
    props.identifier = 'dataset-level';
    props.downloadsIsEmpty = false;
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-dataset-level-results-button"]').should('be.visible').should('not.be.disabled');
  });
  it('Displays the tooltips when the download participant-level results button is disabled', () => {
    props.identifier = 'participant-level';
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-participant-level-results-button"]')
      .first()
      .trigger('mouseenter', { force: true });

    cy.get('[data-cy="download-participant-level-results-button-tooltip"]')
      .should('be.visible')
      .trigger('mouseleave');
  });
  it('Displays the tooltips when the download dataset-level results button is disabled', () => {
    props.identifier = 'dataset-level';
    cy.mount(DownloadResultsButton, {
      propsData: props,
    });
    cy.get('[data-cy="download-dataset-level-results-button"]')
      .first()
      .trigger('mouseenter', { force: true });

    cy.get('[data-cy="download-dataset-level-results-button-tooltip"]')
      .should('be.visible');
  });
  it('Emits download-results event when the button is clicked', () => {
    props.identifier = 'participant-level';
    props.downloadsIsEmpty = false;
    cy.mount(DownloadResultsButton, {
      listeners: {
        'download-results': cy.spy().as('spy'),
      },
      propsData: props,
    });
    cy.get('[data-cy="download-participant-level-results-button"]').click();
    cy.get('@spy').should('have.been.calledWith', 'participant-level');
  });
});
