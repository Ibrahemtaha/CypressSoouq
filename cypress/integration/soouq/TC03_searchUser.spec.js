/// <reference types="Cypress"/>
import Searchuser from '../../support/pageObjects/Searchuser'

describe('SearchUser', ()=>{
  const searchuser = new Searchuser() // an Object from Login Class
  // Login
  beforeEach( ()=>{
    cy.Signin()
  })
  // Search User by Email
  it('SearchUserEmail', ()=>{
    searchuser.menuXpath().click()
    searchuser.menuItemXpath().click()
    searchuser.span().contains("Users").click()
    // Choose User Email address 
    searchuser.inputSearch().clear().type("ww@gmail.com")
    cy.wait(3000)
     // Assert Email address
    searchuser.table().contains('td','ww@gmail.com').should('be.visible')
  })
  // 2) Search User by Name
  it('SearchUserName', ()=> {
    // Click on users
    searchuser.menuXpath().click()
    searchuser.menuItemXpath().click()
    searchuser.span().contains("Users").click()
    // Choose User name
    searchuser.inputSearch().clear().type("Jeevamohan")
    cy.wait(5000)
     // Assert User name
     searchuser.table().contains('td','Jeevamohan').should('be.visible')
  })
})