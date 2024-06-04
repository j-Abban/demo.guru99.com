/// <reference types="cypress"/>

/*describe('Guru99 Bank Automation - Edit Account Functionlity', () => {

    before(() => {
    // Ignore specific uncaught exceptions
    Cypress.on('uncaught:exception', (err,runnable) => {
    // Ignore errors containing "select" in the message
    if( err.message.includes('validatebal') || err.message.includes("Cannot read properties of undefined (reading 'select')")) {
        return false;
    }
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

    // Verify that the page contain "Edit Account Form" text
    cy.get('p[class="heading3"]').contains('Edit Account Form');

    // Enter your customer account number
    const accountId = '135585';
    cy.get('input[name="accountno"]').type(accountId);

    // Click on Submit button
    cy.get('input[name="AccSubmit"]').click();

     // Handle the form submission and potential page load
        cy.on('window:before:load', (win) => {
            // Define the validatebal function if it does not exist
            if (typeof win.validatebal !== 'function') {
                win.validatebal = () => true;
            }
        });

        // Verify the page loaded successfully
        cy.url().should('include', 'editAccountPage.php');

   
  });
});*/

// cypress/integration/edit_account_spec.js

// cypress/integration/edit_account_spec.js

describe('Edit Account Functionality', () => {
    before(() => {
        // Visit the Guru99 Bank home page
        cy.visit('https://demo.guru99.com/V4/');

        // Login to the application
        cy.get('input[name="uid"]').type('mngr574432');
        cy.get('input[name="password"]').type('YdetYpu');
        cy.get('input[name="btnLogin"]').click();

        // Verify successful login by checking the presence of the manager identifier
        cy.contains('Manager').should('be.visible');
    });

    beforeEach(() => {
        // Handle uncaught exceptions
        cy.on('uncaught:exception', (err, runnable) => {
            // Ignore specific errors
            if (err.message.includes('validatebal') || err.message.includes("Cannot read properties of undefined (reading 'select')")) {
                return false;
            }
        });
    });

    it('Navigates to Edit Account Page', () => {
        // Visit the direct Edit Account URL
        cy.visit('https://demo.guru99.com/V4/manager/editAccount.php');

        // Verify the page loaded successfully
        cy.url().should('include', 'editAccount.php');
        cy.get('p[class="heading3"]').should('contain.text', 'Edit Account Form');
    });

    it('Fetches an existing account ID and updates account details', () => {
        // Assuming we already have an account ID to use for editing, replace 'existingAccountID' with a valid one
        const existingAccountID = '135585';

        // Ensure the input field is available before typing
        cy.get('input[name="accountno"]', { timeout: 20000 }).should('be.visible').type(existingAccountID);

        // Submit the form to fetch account details
        cy.get('input[name="AccSubmit"]').click();

        // Ensure validatebal does not cause issues
        cy.on('window:before:load', (win) => {
            // Define the validatebal function if it does not exist
            if (typeof win.validatebal !== 'function') {
                win.validatebal = () => true;
            }
        });

        // Verify the page loaded successfully
        cy.url().should('include', 'editAccountPage.php');
    });
});