class Searchuser{
  menuXpath(){
    return cy.xpath('//body/aside[1]/section[1]/ul[1]/li[9]/a[1]')
  }
  menuItemXpath(){
    return cy.xpath('/html/body/aside/section/ul/li[9]/ul/li[1]/a/span')
  }
  span(){
    return cy.get('span')
  }
  inputSearch(){
    return cy.get('input[type="search"]')
  }
  table(){
    return cy.get('#DataTables_Table_0')
  }

}

export default Searchuser