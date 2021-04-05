/// <reference types="Cypress"/>
import Login from '../../support/pageObjects/login'

describe('addUser', ()=>{
  // Login
  before( ()=>{
    cy.Signin()
  })
  // Add User
  it('addUser', ()=>{
    //cy.get('a').should('have.attr', 'href').and('equal', '/users').click()
    cy.xpath('//body/aside[1]/section[1]/ul[1]/li[9]/a[1]').click()
    cy.xpath('/html/body/aside/section/ul/li[9]/ul/li[1]/a/span').click()
    cy.get('span').contains("Users").click()
    cy.get('.btn.btn-primary.btn-actions.btn-create').contains('Create User').click()
    // Fill user information
    cy.get('input[name="first_name"]').type("Ibrahem")
    cy.get('input[name="last_name"]').type("Ibrahem")
    cy.get('input[name="email"]').type("Ibrahemee@gmail.com")
    cy.get('input[type="select-multiple"]').select().type('Admin').type('{downarrow}').type('{enter}') /// here is the problem
    cy.wait(2000)
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