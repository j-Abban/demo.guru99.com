/// <reference types = "cypress" />

describe('Guru Bank Automation', () => {
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

it('should add a new customer', () => {
    //Navigate to new Customer
    cy.contains('New Customer').click();

    // Verify the add new customer page conatains "Add New Customer" text
    cy.get('.heading3').contains('Add New Customer');

    // Enter Customer Name
    cy.get(':nth-child(4) > :nth-child(2) > input').type('Daniel Mensah');

    // Select the Male radio button
    cy.get('[value="m"]').check();

    // Verify the male radio button is checked
    cy.get('[value="m"]').should('be.checked');

    // Verify the female radio buton is not checked
     cy.get('[value="f"]').should('not.be.checked');

    // Enter Date of Birth
    cy.get('input[name="dob"]').type('1847-07-24');

    // Enter Address
    cy.get('textarea[name="addr"]').type('Harvard University');

    // Enter customer city
    cy.get('input[name="city"]').type('Cape Coast');

    // Enter customer State
    cy.get('input[name="state"]').type('Kotoraba');

    // Enter customer PIN
    cy.get('input[name="pinno"]').type('888777');

    // Enter customer mobile Number
    cy.get('input[name="telephoneno"]').type('0565709722');

     // Enter customer mobile Number
     cy.get('input[name="emailid"]').type('daniel.mensah@amalitech.com');

     // Enter customer password
     cy.get('input[name="password"]').type('dhanny.m3ns@h!$');

     // Click on submit
     cy.get('input[name="sub"]').click();

        // Verify the new customer creation
    cy.url().should('include', '/CustomerRegMsg.php');
    cy.get('p.heading3').should('contain.text', 'Customer Registered Successfully!!!');

    // Capture and verify the customer ID
    cy.get('td:contains("Customer ID") + td').invoke('text').then((customerId) => {
      cy.log('Customer ID:', customerId);
      // Ensure the customer ID is not empty
      cy.wrap(customerId).should('not.be.empty');
      });
      });
});