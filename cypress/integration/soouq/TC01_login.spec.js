/// <reference types="Cypress"/>
import Login from '../../support/pageObjects/login'


describe('Login', () => {
  const login = new Login() // an Object from Login Class
  // Login Test
  it('Signin', ()=>{
    cy.visit("/")
    cy.title().should('eq','Login - FleetCart')    // Title asserion
    login.email().type(Cypress.env('email'))
    login.password().type(Cypress.env('password'))
    login.signInButtom().contains('Login').should('be.visible').click()
    cy.title().should('eq', 'Dashboard - FleetCart Admin')
  })
})

