/// <reference types= "cypress" /> 

describe('Guru Bank Automation', () => {
    before(() => {
        // Ignore specific uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignore errors containing "validatebal" or "select" in the message
            if (err.message.includes('validatebal') || err.message.includes('select') || err.message.includes('validate')) {
                return false;
            }
            // Allow other errors to fail the test
            return true;
        });
    });

    beforeEach(() => {
        cy.visit('https://demo.guru99.com/V4/');

    // Enter UserID
    cy.get(':nth-child(1) > :nth-child(2) > input').type('mngr574432');

    // Enter Password 
    cy.get(':nth-child(2) > :nth-child(2) > input').type('YdetYpu');

    // Click on login button
    cy.get('[type="submit"]').click();
    cy.wait(2000);

    // Verify that the manager has login 
    cy.url().should('include', '/Managerhomepage.php');
      });

      it('should Edit an existing Customer', () =>{
        // Navigate to the  "Edit Customer" page
        cy.get('.menusubnav > :nth-child(3) > a').click();

        // Verify the Edit Customer page contains "Edit Customer Form" text
        cy.get('.heading3').contains('Edit Customer Form');
        
        // Enter customer ID
        const customerID = "94401";

        cy.get('input[name="cusid"]').type('65110'); //94401

         // Submit the form to load customer details
         cy.get('input[name="AccSubmit"]').click();

         // Ensure elements are present before interacting
         cy.get('input[name="name"]').should('exist');
         cy.pause(200)
         cy.wait(2000);

         // Edit Customer details
         cy.get('input[name="name"]').should('be.disabled');
         cy.get('input[name="name"]').invoke('removeAttr', 'disabled').clear().type('Oppong Attah Kenneth', {force: true});
         cy.get('input[name="dob"]').should('be.disabled'); // Verify that the field is disabled
         cy.get('input[name="dob"]').invoke('removeAttr', 'disabled').clear().type('1998-07-21', {force: true});
         cy.get('textarea[name="addr"]').clear().type('Market Circle Takoradi');
         cy.get('input[name="city"]').clear().type('Accra Ghana');
         cy.get('input[name="state"]').clear().type('East Legon');
         cy.get('input[name="pinno"]').clear().type('999667');
         cy.get('input[name="telephoneno"]').clear().type('+233557298173');
         cy.get('input[name="emailid"]').clear().type('ec2007@gmail.com');

         // Click on submit to update customer details
         cy.get('input[name="sub"]').click();
      });
});