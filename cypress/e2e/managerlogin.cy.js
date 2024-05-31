/// <reference types="cypress" />

describe('Guru99 Bank Automation', () => {
  beforeEach(() => {
    cy.visit('https://demo.guru99.com/V4/')
  })

  it('should login as manager', () => {
  
    // Enter UserID
    cy.get(':nth-child(1) > :nth-child(2) > input').type('mngr574432');

    // Enter Password 
    cy.get(':nth-child(2) > :nth-child(2) > input').type('YdetYpu');

    // Click on login button
    cy.get('[type="submit"]').click();

    // Verify that the manager has login 
    cy.url().should('include', '/Managerhomepage.php');
  });
});