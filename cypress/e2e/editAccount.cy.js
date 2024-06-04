/// <reference types="cypress"/>

describe('Guru99 Bank Automation - Edit Account Functionlity', () => {

    before(() => {
    // Ignore specific uncaught exceptions
    Cypress.on('uncaught:exception', (err,runnable) => {
    // Ignore errors containing "select" in the message
    if(err.message.includes('select')) {
        return false;
    }
    // Allow other errors to fail the test
    return true;
    });
    });

  beforeEach(() => {
    cy.visit('https://demo.guru99.com/V4/');

     // Enter UserID
     cy.get('input[name="uid"]').type('mngr574432');

     // Enter Password 
     cy.get('input[name="password"]').type('YdetYpu');
 
     // Click Login Button
     cy.get('input[name="btnLogin"]').click();
    
     // Verify the manager is on the login page and the url include "Managerhomepage"
     cy.url().should('include', '/Managerhomepage.php');
  });

  it('Navigates to Edit Account Page', () => {
    // Click on Edit Account
    cy.contains('Edit Account').click();

    // Veruify that the page contain "Edit Account Form" text
    cy.get('p[class="heading3"]').contains('Edit Account Form');
   
  });
});