export class TodoPage{

  navigate(){
    cy.visit("http://localhost:2368/ghost/#/signin")
  }

  login(username,password){
    cy.wait(2000)
    cy.get('#ember8').type(username,{force: true});
    cy.get('#ember10').type(password,{force: true});
    this.clickBoton('.login',2000)
    //cy.get('.login').click({force: true});
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
  }

  clickBoton(selectorButton,wait){
    cy.get(selectorButton).click({force: true});
    cy.wait(wait);
  }

  typeInElement(element,text){
    cy.get(element).type(text);
  }

 
}