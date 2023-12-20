import { mixedResponse } from '../fixtures/example-responses';

describe('API request', () => {
  it('Intercepts the request sent to the API and asserts over the request url', () => {
    cy.intercept({
      method: 'GET',
      url: '**/query/?*',
    }, mixedResponse).as('call');
    cy.intercept({
      method: 'GET',
      url: '**/nodes/',
    }).as('getNodes');
    cy.visit('/?node=OpenNeuro');
    // We need to wait for the fetch to complete and populate the
    // dropdown with nodes and selecting OpenNeuro before making the request
    cy.wait('@getNodes');
    cy.get('[data-cy="Min Age-continuous-field-input"]').type('10');
    cy.get('[data-cy="Max Age-continuous-field-input"]').type('30');
    cy.get('[data-cy="submit-query"]').click();
    cy.wait('@call').its('request.url').should('contains', '&min_age=10&max_age=30');
  });
});
