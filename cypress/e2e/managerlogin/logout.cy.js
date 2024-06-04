/// <reference types="cypress" />

describe('Guru99 Bank Automation', () => {
  beforeEach(() => {
    cy.visit('https://demo.guru99.com/V4/')

     // Enter UserID
     cy.get('input[name="uid"]').type('mngr574432');

     // Enter Password 
     cy.get('input[name="password"]').type('YdetYpu');
 
     // Click on login button
     cy.get('[type="submit"]').click();
     cy.wait(2000);
 
  });

  it('should login as Manager', () => {
    // Verify that the manager has login 
    cy.contains('Manger Id : mngr574432').should('be.visible');
    cy.url().should('include', '/Managerhomepage.php');
    cy.wait(6000);
  });

  it('should logout', () => {
    //Navigate to logout and click
    cy.contains('Log out').click();

     // Handle the alert popup
     cy.on('window:alert', (str) => {
      expect(str).to.equal('You Have Succesfully Logged Out!!');
    });

    // Verify that the manager has logout
    cy.url().should('include', '/index.php');
});
});