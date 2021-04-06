class Login{
  email(){
    return cy.get('input[type="text"]')
  }
  //email = () => cy.get('input[type="text"]')       /// An alternative way to write it
  password(){
    return cy.get('input[type="password"]')
  }
  signInButtom(){
    return cy.get('.btn').contains('Login')
  }
}

export default Login