/// <reference types="cypress"/>

describe('Guru Bank Automation - Delete Customer', () =>{
before(() =>{
    // Ignore specific uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore known issues in the application
    if (err.message.includes('validatebal') || err.message.includes('select')) {
        return false;
    }
    // Allow othe errors to fail the test
    return true;
    });
})
    beforeEach(() =>{
    cy.visit('https://demo.guru99.com/V4/');

    // Enter UserID
    cy.get('input[name="uid"]').type('mngr574432');

    // Enter Password 
    cy.get('input[name="password"]').type('YdetYpu');

    // Click on login button
    cy.get('[type="submit"]').click();
    cy.wait(2000);

    cy.url().should('include', 'https://demo.guru99.com/V4/manager/Managerhomepage.php');
    });

    it('should delete an existing Customer', () => {
    // Navigate to "Delete Customer" Page
    cy.get('.menusubnav > :nth-child(4) > a').click();

    // Verify that the delete customer page contains "Delete Customer Form" text
    cy.get('p[class="heading3"]').contains('Delete Customer Form');
    cy.pause(2000);

    // Enter customer ID and confirm the deletion
    const customerId = '31002';
    cy.get('input[name="cusid"]').type(customerId);

    // Submit the form to delete the customer
    cy.get('input[name="AccSubmit"]').click();

    // Handle the alert after deletion
    cy.on('', (str) => {
        // Check if the message in the alert dialog is as expected
        expect(str).to.equal('Customer deleted Successfully');
    });

    // Confirm the URL redirects to the delete confirmation page
    cy.url().should('include', '/manager/');
    });
});