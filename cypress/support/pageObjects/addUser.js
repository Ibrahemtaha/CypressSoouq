class addUser{
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
  password(){
    return cy.get('input[name="password"]')
  }
  confirmPassword(){
    return cy.get('input[name="password_confirmation"]')
  }
}

export default addUser