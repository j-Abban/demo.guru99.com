/// <reference types="cypress" />

describe('Guru99 Bank Automation', () => {
  beforeEach(() => {
    cy.visit('https://demo.guru99.com/V4/')
  })

  it('should login as manager', () => {
  
    // Enter UserID
    cy.get('input[name="uid"]').type('mngr574432');

    // Enter Password 
    cy.get('input[name="password"]').type('YdetYpu');

    // Click on login button
    cy.get('[type="submit"]').click();

    // Verify that the manager has login 
    cy.url().should('include', '/Managerhomepage.php');
  });
});