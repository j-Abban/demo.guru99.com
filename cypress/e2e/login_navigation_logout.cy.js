/// <reference types="cypress"/>

describe('Navigation to all functionalities on Guru99 Bank Demo Site', () => {
  beforeEach(() => {
    // Ignore specific uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Ignore known issues in the application
      if (err.message.includes('validatebal') || err.message.includes('select')) {
          return false;
      }
      // Allow othe errors to fail the test
      return true;
      });

    // Visit the login page
    cy.visit('https://demo.guru99.com/V4/');

      // Enter UserID
      cy.get(':nth-child(1) > :nth-child(2) > input').type('mngr574432');
  
      // Enter Password 
      cy.get(':nth-child(2) > :nth-child(2) > input').type('YdetYpu');
  
      // Click on login button
      cy.get('[type="submit"]').click();
  
      // Assert that the login is successful
      cy.contains('Manger Id : mngr574432').should('be.visible');
      cy.wait(2000);
  });

// Navigate to New Customer
  it('should navigate to New Customer', () => {
   cy.get('.menusubnav > :nth-child(2) > a').click();
   cy.get('.heading3').contains('Add New Customer');
   cy.url().should('include', '/addcustomerpage.php');
   cy.wait(2000);
  });

// Navigate to Edit Customer
  it('should navigate to Edit Customer', () => {
    cy.get('.menusubnav > :nth-child(3) > a').click();
    cy.get('.heading3').contains('Edit Customer Form');
    cy.url().should('include', '/EditCustomer.php');
    cy.wait(2000);
   });

// Navigate to Delete Customer
  it('should navigate to Delete Customer', () => {
   cy.get('.menusubnav > :nth-child(4) > a').click();
   cy.get('.heading3').contains('Delete Customer Form');
   cy.url().should('include', '/DeleteCustomerInput.php');
   cy.wait(2000);
  });

  // Navigate to New Customer
  it('should navigate to New Account', () => {
   cy.get('.menusubnav > :nth-child(5) > a').click();
   cy.get('.heading3').contains('Add new account form');
   cy.url().should('include', '/addAccount.php');
   cy.wait(2000);
  });

 // Navigate to Edit Account
 it('should navigate to Edit Account', () => {
  cy.get('.menusubnav > :nth-child(6) > a').click();
  cy.get('.heading3').contains('Edit Account Form');
  cy.url().should('include', '/editAccount.php');
  cy.wait(2000);
 }); 

// Navigate to Delete Account
  it('should navigate to Delete Account', () => {
   cy.get('.menusubnav > :nth-child(7) > a').click();
   cy.get('.heading3').contains('Delete Account');
   cy.url().should('include', '/deleteAccountInput.php');
   cy.wait(2000);
  });

// Navigate to Deposite
  it('should navigate to Deposite', () => {
   cy.get('.menusubnav > :nth-child(8) > a').click();
   cy.get('.heading3').contains('Amount Deposit Form');
   cy.url().should('include', '/DepositInput.php');
   cy.wait(2000);
  });

// Navigate to Withdrawal
  it('should navigate to Withdrawal', () => {
   cy.get('.menusubnav > :nth-child(9) > a').click();
   cy.get('.heading3').contains('Amount Withdrawal Form');
   cy.url().should('include', '/WithdrawalInput.php');
   cy.wait(2000);
  });

  // Navigate to Fund Transfer
  it('should navigate to Fund Transfer', () => {
   cy.get('.menusubnav > :nth-child(10) > a').click();
   cy.get('.heading3').contains('Fund transfer');
   cy.url().should('include', '/FundTransInput.php');
   cy.wait(2000);
  });

// Navigate to change password
  it('should navigate to Change Password', () => {
   cy.get('.menusubnav > :nth-child(11) > a').click();
   cy.get('.heading3').contains('Change Password');
   cy.url().should('include', '/PasswordInput.php');
   cy.wait(2000);
  });

// Navigate to Balance Enquiry
it('should navigate to Balance Enquiry', () =>{
   cy.get('.menusubnav > :nth-child(12) > a').click();
   cy.get('.heading3').contains('Balance Enquiry Form');
   cy.url().should('include', '/BalEnqInput.php');
   cy.wait(2000);
});

// Navigate to Mini Statements
it('should navigate to Mini Statements', () =>{
  cy.get('.menusubnav > :nth-child(13) > a').click();
  cy.get('.heading3').contains('Mini Statement Form');
  cy.url().should('include', '/MiniStatementInput.php');
  cy.wait(2000);
});

// Navigate to Customised Statements
it('should navigate to Customised Statements', () =>{
  cy.get('.menusubnav > :nth-child(14) > a').click();
  cy.get('.heading3').contains('Customized Statement Form');
  cy.url().should('include', '/CustomisedStatementInput.php');
  cy.wait(2000);
});

// Navigate to Logout
  it('should navigate to Logout', () => {
   cy.get('.menusubnav > :nth-child(15) > a').click();
   cy.url().should('include', '/index.php');
   // Handle the alert pop-up
   cy.on('window:alert', (str) => {
    // Assert the alert text
    expect(str).to.equal('You Have Succesfully Logged Out!!');
    cy.wait(2000);
});
   cy.get('h2[class="barone"]').contains('Guru99 Bank');
  });
});