import {TodoPage} from "./todo-page"
export class Pagina {
  
  constructor(){
    this.todoPage = new TodoPage();
  }

  navigate(){
    this.todoPage.navigate();
  }

  login(username,password){
    this.todoPage.login(username,password);
  }

  clickSeccionPages(){
    this.todoPage.clickBoton("a[href='#/pages/']",1000)
  }
  
  clickBotonCrearPage(){
    cy.get("a[href='#/editor/page/']").then($links => {
      var firstLink = $links.get(0);
      
      if(!Cypress.dom.isHidden(firstLink)) {
        cy.wrap(firstLink).click({force: true});
      }
   });
  }

  enterTituloPage(title){
    this.todoPage.typeInElement(".gh-editor-title",title);
    this.todoPage.clickBoton("body",50)
  }

  publicarPage(){
    this.todoPage.clickBoton(".gh-publishmenu-trigger",1000)
    this.todoPage.clickBoton(".gh-publishmenu-button",3000)
  }
  
  programarPublicacionPage(){
    this.todoPage.clickBoton(".gh-publishmenu-trigger",1000)
    cy.get(".gh-date-time-picker").then($pickers => {
      var picker = $pickers.get(0);
      if(!Cypress.dom.isHidden(picker)) {
        cy.wrap(picker).click({force: true});
      }
    });
    this.todoPage.clickBoton(".gh-publishmenu-button",3000)
  }
  
  verPreviewPage(){
    this.todoPage.clickBoton("button[title='Settings']",1000)
    this.todoPage.clickBoton(".post-view-link",3000)
  }
  
  validarPageCreado(titulo){
    cy.wait(1000)
    cy.get('.gh-list-data.gh-post-list-title h3').should(($title) => {
      expect($title.first()).to.contain(titulo);
    });    
  }
  
  clickPageCreada(){
    cy.get(".gh-list-data.gh-post-list-title h3").then($pages => {
      var firstPage = $pages.get(0);
      if(!Cypress.dom.isHidden(firstPage)) {
        cy.wrap(firstPage).click({force: true});
      }
    });
  }
  
  eliminarPageCreada(){
    this.todoPage.clickBoton("button[title='Settings']",1000)
    this.todoPage.clickBoton(".settings-menu-delete-button",1000)
    this.todoPage.clickBoton(".gh-btn-red",1000)
  }
  
  logout(){
    this.todoPage.clickBoton(".gh-user-avatar",1000)
    this.todoPage.clickBoton("a[href='#/signout/']",50)
  }
}
