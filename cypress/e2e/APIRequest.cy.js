import { mixedResponse, emptyDiagnosisOptions, emptyAssessmentToolOptions } from '../fixtures/example-responses';

describe('API request', () => {
  it('Intercepts the request sent to the API and asserts over the request url', () => {
    cy.intercept({
      method: 'GET',
      url: 'query/?*',
    }, mixedResponse).as('call');
    cy.intercept({
      method: 'GET',
      url: '/nodes/',
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
  it('Empty responses for diagnosis and Assessment make a toast appear', () => {
    cy.intercept({
      method: 'GET',
      url: '/attributes/nb:Diagnosis',
    }, emptyDiagnosisOptions).as('getDiagnosisOptions');
    cy.intercept({
      method: 'GET',
      url: '/attributes/nb:Assessment',
    }, emptyAssessmentToolOptions).as('getAssessmentToolOptions');
    cy.visit('/');
    cy.wait('@getDiagnosisOptions');
    cy.contains('#b-toaster-top-right', 'No diagnosis options were available');
    cy.wait('@getAssessmentToolOptions');
    cy.contains('#b-toaster-top-right', 'No assessment tool options were available');
  });
  it('Failed responses for diagnosis and assessment make an error toast appear', () => {
    cy.intercept({
      method: 'GET',
      url: '/attributes/nb:Diagnosis',
    }, { statusCode: 500 }).as('getDiagnosisOptions');
    cy.intercept({
      method: 'GET',
      url: '/attributes/nb:Assessment',
    }, { statusCode: 500 }).as('getAssessmentToolOptions');
    cy.visit('/');
    cy.wait('@getDiagnosisOptions');
    cy.contains('#b-toaster-top-right', 'Failed to retrieve diagnosis options');
    cy.wait('@getAssessmentToolOptions');
    cy.contains('#b-toaster-top-right', 'Failed to retrieve assessment tool options');
  });
});
