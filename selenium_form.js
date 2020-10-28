// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

/// <reference types = "cypress" />

it('Login with valid creds', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('[id="username"]').type('tomsmith');
  cy.get('[id="password"]').type('SuperSecretPassword!');
  cy.get('.fa').click ();
  cy.get('.flash.success').contains('You logged into a secure area').should('exist')
});

it('Login with invalid creds', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('[id="username"]').type('raccooncity');
  cy.get('[id="password"]').type('littleraccoon!');
  cy.get('.fa').click ();
  cy.get('.flash.error').contains('Your username is invalid!').should('exist')
});

it('Logout from app', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('[id="username"]').type('tomsmith');
  cy.get('[id="password"]').type('SuperSecretPassword!');
  cy.get('.fa').click ();
  cy.get('.flash.success').contains('You logged into a secure area').should('exist')
  cy.get('[href="/logout"]').click ();
  cy.get('.flash.success').contains('You logged out of the secure area!').should('exist')
});