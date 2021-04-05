/// <reference types="Cypress"/>
import Login from '../../support/pageObjects/login'

describe('addUser', ()=>{
  // Login
  before( ()=>{
    cy.Signin()
  })

  it('addUser', ()=>{
    cy.get('a').should('have.attr', 'href').contains("http://es.marvelcoders.com/en/admin/users").click()
    cy.get('span').contains("Users").click()
    cy.get('.btn.btn-primary.btn-actions.btn-create').contains('Create User').click()
    // Fill user information
    cy.get('input[name="first_name"]').type("Ibrahem")
    cy.get('input[name="last_name"]').type("Ibrahem")
    cy.get('input[name="email"]').type("Ibrahemee@gmail.com")
    cy.get('input[type="select-multiple"]').type("Admin").type('{enter}')   // Here is the problem
    cy.get('input[name="password"]').type("Ibrahem12!@")
    cy.get('input[name="password_confirmation"]').type("Ibrahem12!@")
    cy.get('.btn').contains('Save').should('be.visible').click()
    // Assert User

  })
})

// Github upload files commands, + ignore node modules
// Hook problem (before)
// Roles issue 
// Assert New user 
// move most of that to pageObjects 