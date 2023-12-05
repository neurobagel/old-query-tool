describe('Alert', () => {
  it('Correctly displays and dismisses the alert', () => {
    cy.visit('/?node=Parkinson\'s Progression Markers Initiative');
    cy.get('[data-cy="alert"]').should('not.exist');
    cy.visit('/');
    cy.get('[data-cy="alert"]').should('be.visible').should('contain', ' The OpenNeuro node is being actively annotated at the participant');
    cy.get('[data-cy="node-field"]').type('OpenNeuro{enter}');
    cy.get('[data-cy="alert"]').should('be.visible');
    cy.get('[data-cy="dismiss-alert"]').click();
    cy.get('[data-cy="alert"]').should('not.exist');
  });
});
