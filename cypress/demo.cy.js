import Index from '../pages/index.vue';

describe('Demo Test', () => {
  it('renders "Query Tool" text', () => {
    cy.mount(Index);
    cy.get("[data-cy='text']").contains('Query Tool');
  });
});
