/// <reference types="cypress"/>

describe('Guru99 Bank Automation', () => {

    before(() => {
        // Ignore specific uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {

        // Ignore errors containing "txtaccno" in the message
        if (err.message.includes('txtaccno')) {
            return false;
        }
        // Allow other errors to fail the test
          return true;
        });
      });

    beforeEach(() => {
        cy.visit('https://demo.guru99.com/V4/')

      // Enter UserID
    cy.get(':nth-child(1) > :nth-child(2) > input').type('mngr574432');

    // Enter Password 
    cy.get(':nth-child(2) > :nth-child(2) > input').type('YdetYpu');

    // Click on login button
    cy.get('[type="submit"]').click();
    });

    it('should create a new account for and existing customer', () => {
      // Click on New Account link
      cy.get('.menusubnav > :nth-child(5) > a').click();

      // Verify that the New Account Page Url exists
      cy.url().should('include', '/addAccount.php');

      // Verify that the New Account Page has "Add new account form" text
      cy.get('.heading3').contains('Add new account form');

      // Enter customer ID
      const customerId = "94138"; // account : 	135583
      cy.get(':nth-child(2) > :nth-child(2) > input').type(customerId); //65110 //135489, 135490 Account ID

      // Select Account Type
      cy.get('select[name="selaccount"]').select('Current');

      // Enter amount for initial deposite
      cy.get(':nth-child(4) > :nth-child(2) > input').type('7000');

      // Click on submit button
      cy.get('[type="submit"]').click();

      // Very the Url of the New account page
      cy.url().should('include', '/AccCreateMsg.php');

      // Verify that the New Account Page has "Account Created Successfully" text
      cy.get('.heading3').contains('Account Generated Successfully!!!');

      // Capture and verify the customer ID
    cy.get('td:contains("Account ID") + td').invoke('text').then((accountId) => {
        cy.log('Account ID:', accountId);

        // Ensure the customer ID is not empty
        cy.wrap(accountId).should('not.be.empty');
      });
    });
});