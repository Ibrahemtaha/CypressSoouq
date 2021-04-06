class AddUser{
  userDropdown(){
    return cy.xpath('//body/aside[1]/section[1]/ul[1]/li[9]/a[1]')
  }
  userDropdownItem(){
    return cy.xpath('/html/body/aside/section/ul/li[9]/ul/li[1]/a/span')
  }
  createUserButom(){
    return cy.get('.btn.btn-primary.btn-actions.btn-create').contains('Create User')
  }
  usersItem(){
    return  cy.get('span').contains("Users")
  }
  firstName(){
    return cy.get('input[name="first_name"]')
  }
  lastName(){
    return cy.get('input[name="last_name"]')
  }
  email(){
    return cy.get('input[name="email"]')
  }
  role(){
    return cy.get('input[type="select-multiple"]')
  }
  title(){
    return cy.get('h3').contains('Account').should('be.visible')
  }
  password(){
    return cy.get('input[name="password"]')
  }
  confirmPassword(){
    return cy.get('input[name="password_confirmation"]')
  }
  button(){
    return cy.get('.btn').contains('Save').should('be.visible')
  }
  /// Assert User
  inputSearch(){
    return cy.get('input[type="search"]')
  }
  table(){
    return cy.get('#DataTables_Table_0')
  }
}

export default AddUser