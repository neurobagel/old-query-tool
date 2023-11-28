import { mixedResponse } from '../fixtures/example-responses';

describe('API request', () => {
  it('Intercepts the request sent to the API and asserts over the request url', () => {
    cy.intercept({
      method: 'GET',
      url: 'query/?*',
    }, mixedResponse).as('call');
    cy.visit('/');
    cy.get('[data-cy="Min Age-continuous-field-input"]').type('10');
    cy.get('[data-cy="Max Age-continuous-field-input"]').type('30');
    cy.get('[data-cy="submit-query"]').click();
    cy.wait('@call').its('request.url').should('contains', 'min_age=10&max_age=30');
  });
});
