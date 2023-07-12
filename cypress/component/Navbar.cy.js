import Navbar from '../../components/Navbar.vue';

describe('Navbar', () => {
  it('Displays the navbar with the correct links', () => {
    cy.mount(Navbar);
    cy.get('[data-cy="brand"]').should('be.visible');
    cy.get('[data-cy="brand"]').contains('Neurobagel Query');
    cy.get('[data-cy="brand"]').contains('Define and find cohorts at the sample level');
    cy.get('[data-cy="brand"]').should('have.attr', 'href', 'https://www.neurobagel.org/');
    cy.get('[data-cy="version"]').should('be.visible');
    cy.get('[data-cy="version"]').contains('v0.1.0');
    cy.get('[data-cy="version"]').within(() => {
      cy.get('a').should('have.attr', 'href', 'https://github.com/neurobagel/query-tool/tree/v0.1.0/');
    });
    cy.get('[data-cy="docs"]').should('be.visible');
    cy.get('[data-cy="docs"]').contains('Documentation');
    cy.get('[data-cy="docs"]').within(() => {
      cy.get('a').should('have.attr', 'href', 'https://www.neurobagel.org/documentation/');
    });
    cy.get('[data-cy="feedback"]').should('be.visible');
    cy.get('[data-cy="feedback"]').contains('Feedback');
    cy.get('[data-cy="feedback"]').within(() => {
      cy.get('a').should('have.attr', 'href', 'https://github.com/neurobagel/query-tool/issues/');
    });
    cy.get('[data-cy="github"]').should('be.visible');
    cy.get('[data-cy="github"]').within(() => {
      cy.get('a').should('have.attr', 'href', 'https://github.com/neurobagel/query-tool/');
    });
  });
});
