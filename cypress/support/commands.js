// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import Login from '../../support/pageObjects/login'

Cypress.Commands.add("Signin", ()=>{
  // const login = new Login() // an Object from Login Class

  cy.visit("/")
  cy.title().should('eq','Login - FleetCart')    // Title asserion
  cy.get('input[type="text"]').type(Cypress.env('email'))
  cy.get('input[type="password"]').type(Cypress.env('password'))
  cy.get('.btn').contains('Login').contains('Login').should('be.visible').click()
  cy.title().should('eq', 'Dashboard - FleetCart Admin')
})
