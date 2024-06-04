/// <reference types="cypress"/>

describe('Guru99 Bank Automation - Edit Account Functionlity', () => {
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
    cy.contains('Edit Account').click();
   
  });
});