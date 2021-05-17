import {TodoPage} from "./todo-page"
export class Pagina {
  
  constructor(){
    this.todoPage = new TodoPage();
    this.step = 0;
  }
  
  setScenario(newScenario){
    this.scenario = newScenario;
  }

  navigate(){
    this.todoPage.navigate();
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }

  login(username,password){
    this.step++;
    this.todoPage.login(username,password, this.scenario, this.step);
    this.step = this.step+2;
  }

  clickSeccionPages(){
    this.todoPage.clickBoton("a[href='#/pages/']",1000)
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }
  
  clickBotonCrearPage(){
    cy.get("a[href='#/editor/page/']").then($links => {
      var firstLink = $links.get(0);
      
      if(!Cypress.dom.isHidden(firstLink)) {
        cy.wrap(firstLink).click({force: true});
      }
   });
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }

  enterTituloPage(title){
    this.todoPage.typeInElement(".gh-editor-title",title);
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
    this.todoPage.clickBoton("body",50)
  }

  publicarPage(){
    this.todoPage.clickBoton(".gh-publishmenu-trigger",1000)
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
    this.todoPage.clickBoton(".gh-publishmenu-button",3000)
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }
  
  programarPublicacionPage(){
    this.todoPage.clickBoton(".gh-publishmenu-trigger",1000)
    cy.get(".gh-date-time-picker").then($pickers => {
      var picker = $pickers.get(0);
      if(!Cypress.dom.isHidden(picker)) {
        cy.wrap(picker).click({force: true});
      }
    });
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
    this.todoPage.clickBoton(".gh-publishmenu-button",3000)
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }
  
  verPreviewPage(){
    this.todoPage.clickBoton("button[title='Settings']",1000)
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
    this.todoPage.clickBoton(".post-view-link",3000)
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }
  
  validarPageCreado(titulo){
    cy.wait(2000)
    cy.get('.gh-list-data.gh-post-list-title h3').should(($title) => {
      expect($title.first()).to.contain(titulo);
    });
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }
  
  clickPageCreada(){
    cy.get(".gh-list-data.gh-post-list-title h3").then($pages => {
      var firstPage = $pages.get(0);
      if(!Cypress.dom.isHidden(firstPage)) {
        cy.wrap(firstPage).click({force: true});
      }
    });
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }
  
  eliminarPageCreada(){
    this.todoPage.clickBoton("button[title='Settings']",2000)
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
    this.todoPage.clickBoton(".settings-menu-delete-button",2000)
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
    this.todoPage.clickBoton(".gh-btn-red",1000)
    cy.wait(5000);
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }
  
  logout(){
    this.todoPage.clickBoton(".gh-user-avatar",2000)
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
    this.todoPage.clickBoton("a[href='#/signout/']",50) 
  }
}
