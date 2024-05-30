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
    cy.get(':nth-child(1) > :nth-child(2) > input').type('mngr574432');

    // Enter Password 
    cy.get(':nth-child(2) > :nth-child(2) > input').type('YdetYpu');

    // Click on login button
    cy.get('[type="submit"]').click();
    cy.wait(2000);

    // Verify that the manager has login 
    cy.url().should('include', 'https://demo.guru99.com/V4/manager/Managerhomepage.php');
      });

it('should add a new customer', () => {
    //Navigate to new Customer
    cy.get('.menusubnav > :nth-child(2) > a').click();

    // Verify the add new customer page conatains "Add New Customer" text
    cy.get('.heading3').contains('Add New Customer');

    // Enter Customer Name
    cy.get(':nth-child(4) > :nth-child(2) > input').type('Nana Kwame');

    // Select the Male radio button
    cy.get('[value="m"]').check();

    // Verify the male radio button is checked
    cy.get('[value="m"]').should('be.checked');

    // Verify the female radio buton is not checked
     cy.get('[value="f"]').should('not.be.checked');

    // Enter Date
    cy.get('input[name="dob"]').type('2022-01-23');

    // Enter Address
    cy.get('textarea[name="addr"]').type('Osu Oxford Street');

    // Enter customer city
    cy.get('input[name="city"]').type('Accra Ghana');

    // Enter customer State
    cy.get('input[name="state"]').type('Greater Accra');

    // Enter customer PIN
    cy.get('input[name="pinno"]').type('333444');

    // Enter customer mobile Number
    cy.get('input[name="telephoneno"]').type('0550888743');

     // Enter customer mobile Number
     cy.get('input[name="emailid"]').type('nanakwame002@gmail.com');

     // Enter customer password
     cy.get('input[name="password"]').type('N@n@.Kw@m3');

     // Click on submit
     cy.get('input[name="sub"]').click();

      // Verify the new customer creation
    cy.url().should('include', 'CustomerRegMsg.php');
    cy.get('p.heading3').should('contain.text', 'Customer Registered Successfully!!!');
  
      // Capture and verify the customer ID
    cy.get('td:contains("Customer ID") + td').invoke('text').then((customerId) => {
        cy.log('Customer ID:', customerId);
        // Ensure the customer ID is not empty
        cy.wrap(customerId).should('not.be.empty');
      });

      });
});

/*Customer ID	28482

 */