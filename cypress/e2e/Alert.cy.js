describe('Alert', () => {
  it('Correctly displays and dismisses the alert', () => {
    cy.intercept({
      method: 'GET',
      url: '**/nodes/',
    }).as('getNodes');
    cy.visit('/?node=All');
    // We need to wait for the fetch to complete and populate the
    // dropdown with nodes before searching for OpenNeuro
    cy.wait('@getNodes');
    cy.get('[data-cy="openneuro-alert"]').should('be.visible').should('contain', ' The OpenNeuro node is being actively annotated at the participant');
    cy.get('[data-cy="node-field"]').type('Parkinson\'s Progression Markers Initiative{enter}');
    cy.get('[data-cy="node-field"]').contains('All').find('.vs__deselect').click();
    cy.get('[data-cy="openneuro-alert"]').should('not.exist');
    cy.get('[data-cy="node-field"]').type('OpenNeuro{enter}');
    cy.get('[data-cy="openneuro-alert"]').should('be.visible');
    // Currently the toasts are blocking the dismiss button for the alert
    // so we have to wait for them to hide before dismissing the alert
    // TODO: remove once the alert is fixed
    // eslint-disable-next-line
    cy.wait(2000);
    cy.get('[data-cy="dismiss-openenuro-alert"]').click();
    cy.get('[data-cy="openneuro-alert"]').should('not.exist');
  });
});
