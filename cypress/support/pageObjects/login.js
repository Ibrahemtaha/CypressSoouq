class Login{
  email(){
    return cy.get('input[type="text"]')
  }
  password(){
    return cy.get('input[type="password"]')
  }
  signInButtom(){
    return cy.get('.btn').contains('Login')
  }
}

export default Login