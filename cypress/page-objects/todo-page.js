import config from '../config.js'

export class TodoPage{
  navigate(){
    cy.visit("http://localhost:2368/ghost/#/signin")
    cy.wait(3000)
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  }

  login(username,password,scenario, step){
    cy.wait(3000)
    cy.get("input[name='identification']").type(username,{force: true});
    cy.wait(1000)
    this.takeScreenshot(scenario, step);
    
    cy.get("input[name='password']").type(password,{force: true});
    cy.wait(1000)
    step++;
    this.takeScreenshot(scenario, step);
    
    this.clickBoton('.login',2000)
    cy.wait(9000)
    step++;
    this.takeScreenshot(scenario, step);

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

  takeScreenshot(scenario, step){
    //cy.screenshot(`${scenario}_${step}`);
  }
}
