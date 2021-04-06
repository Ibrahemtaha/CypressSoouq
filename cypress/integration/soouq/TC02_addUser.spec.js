/// <reference types="Cypress"/>
import AddUser from '../../support/pageObjects/addUser'
const faker = require("faker");

describe('addUser', ()=>{
  const addUser = new AddUser() // an Object from Login Class
  // Login
  before( ()=>{
    cy.Signin()
    Cypress.Cookies.preserveOnce('fleetcart_session', 'XSRF-TOKEN')
  })
  // Add User
  it('addUser', ()=>{
    addUser.userDropdown().click()
    addUser.userDropdownItem().click()
    addUser.usersItem().click()
    addUser.createUserButom().click()
    // Fill user information
    addUser.firstName().type("Ibrahem")
    addUser.lastName().type("Ibrahem")
    let randomEmail = faker.internet.email();
    addUser.email().type(randomEmail)
    addUser.role().type('Admin').tab() 
    cy.get('h3').contains('Account').should('be.visible').click()  // Click outside
    cy.wait(2000)
    addUser.password().type("Ibrahem12!@")
    addUser.confirmPassword().type("Ibrahem12!@")
    addUser.button().click()
    // Assert User
    addUser.inputSearch().clear().type(randomEmail)
    cy.wait(3000)
    addUser.table().contains('td',randomEmail).should('be.visible')


  })

  it('updateUser', ()=> {
    // Click on users
    console.log('updateUser')
  })
})



// JAvascript function for random email address generator, 
// Assert New user  (in function )
// Edit\Update user (another test)
// move most of that to pageObjects 