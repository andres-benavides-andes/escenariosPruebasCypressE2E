export class TodoPage{

  navigate(){
    cy.visit("http://localhost:2368/ghost/#/signin")
  }

  login(username,password){
    cy.wait(2000)
    cy.get("input[name='identification']").type(username,{force: true});
    cy.get("input[name='password']").type(password,{force: true});
    this.clickBoton('.login',2000)

    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
  }

  clickBoton(selectorButton,wait){
    cy.get(selectorButton).click({force: true});
    cy.wait(wait);
  }

  typeInElement(element,text){
    cy.get(element).type(text,{force: true});
  }

 
}
