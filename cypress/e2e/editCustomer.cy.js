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
    cy.get('input[name="uid"]').type('mngr574432');

    // Enter Password 
    cy.get('input[name="password"]').type('YdetYpu');

    // Click on login button
    cy.get('[type="submit"]').click();
    cy.wait(2000);

    // Verify that the manager has login 
    cy.url().should('include', '/Managerhomepage.php');
      });

      it('should navigates to Edit Customer Page', () =>{
        // Navigate to the  "Edit Customer" page
        cy.contains('Edit Customer').click();

        // Verify the Edit Customer page contains "Edit Customer Form" text
        cy.get('.heading3').contains('Edit Customer Form');
        
        // Enter customer ID
        const customerId = "94401";

        cy.get('input[name="cusid"]').type(customerId); //94401 //65110 //26588

         // Submit the form to load customer details
         cy.get('input[name="AccSubmit"]').click();

         // Ensure elements are present before interacting
         cy.get('input[name="name"]').should('exist');
         cy.pause(200)
         cy.wait(2000);

         // Edit Customer details
         cy.get('input[name="name"]').should('be.disabled'); // Verify that the field is disabled
         cy.get('input[name="name"]').invoke('removeAttr', 'disabled').clear().type('Oliver Adamptey Junior', {force: true});
         cy.get('input[name="dob"]').should('be.disabled'); // Verify that the field is disabled
         cy.get('input[name="dob"]').invoke('removeAttr', 'disabled').clear().type('1996-07-26', {force: true});
         cy.get('textarea[name="addr"]').clear().type('Takoradi Technical University, BU Campus');
         cy.get('input[name="city"]').clear().type('Takoradi Ghana');
         cy.get('input[name="state"]').clear().type('Effia-Kwasimintsim');
         cy.get('input[name="pinno"]').clear().type('666555');
         cy.get('input[name="telephoneno"]').clear().type('+233557298173');
         cy.get('input[name="emailid"]').clear().type('oliveradamptey003@gmail.com');

         // Click on submit to update customer details
         cy.get('input[name="sub"]').click();
      });
});