describe('Alert', () => {
  it('Correctly displays and dismisses the alert', () => {
    cy.visit('/?node=All');
    cy.get('[data-cy="openneuro-alert"]').should('be.visible').should('contain', ' The OpenNeuro node is being actively annotated at the participant');
    cy.visit('/?node=Parkinson\'s Progression Markers Initiative');
    cy.get('[data-cy="openneuro-alert"]').should('not.exist');
    // We need to wait for the fetch to complete and populate the
    // dropdown with nodes before searching for OpenNeuro
    // eslint-disable-next-line
    cy.wait(1000);
    cy.get('[data-cy="node-field"]').type('OpenNeuro{enter}');
    cy.get('[data-cy="openneuro-alert"]').should('be.visible');
    // TODO: remove once the alert is fixed
    // eslint-disable-next-line
    cy.wait(2000);
    cy.get('[data-cy="dismiss-openenuro-alert"]').click();
    cy.get('[data-cy="openneuro-alert"]').should('not.exist');
  });
});
