const response = [
  {
    dataset_uuid: 'http://neurobagel.org/vocab/000d0851-c72e-462d-9457-9ab97ced7d45',
    dataset_name: 'thoughtExperiment',
    dataset_portal_uri: 'https://openneuro.org/datasets/ds001419',
    num_matching_subjects: 3,
    subject_data: [],
    image_modals: ['http://purl.org/nidash/nidm#FlowWeighted', 'http://purl.org/nidash/nidm#T1Weighted'],
  },
];

const response2 = [
  {
    dataset_uuid: 'http://neurobagel.org/vocab/000d0851-c72e-462d-9457-9ab97ced7d',
    dataset_name: 'Some cool dataset',
    dataset_portal_uri: 'https://openneuro.org/datasets/ds001417',
    num_matching_subjects: 5,
    subject_data: [],
    image_modals: ['http://purl.org/nidash/nidm#FlowWeighted'],
  },
  {
    dataset_uuid: 'http://neurobagel.org/vocab/000d0851-c72e-462d-9457-9ab97ced7d45',
    dataset_name: 'thoughtExperiment',
    dataset_portal_uri: 'https://openneuro.org/datasets/ds001419',
    num_matching_subjects: 3,
    subject_data: [],
    image_modals: ['http://purl.org/nidash/nidm#FlowWeighted', 'http://purl.org/nidash/nidm#T1Weighted'],
  },
];

describe('Checkbox', () => {
  it('Unchecks checked checkboxes after a second query is run.', () => {
    cy.viewport(2000, 1000);

    let isFirstClick = true;

    cy.intercept('GET', 'query/*', (req) => {
      if (isFirstClick) {
        isFirstClick = false;
        req.reply(response);
      } else {
        req.reply(response2);
      }
    });

    cy.visit('/');
    cy.get('[data-cy="submit-query"]').click();
    cy.get('[data-cy="card-thoughtExperiment-checkbox"]').check();
    cy.get('[data-cy="submit-query"]').click();
    cy.get('[data-cy="card-thoughtExperiment-checkbox"]').should('not.be.checked');
  });
});
