import { TodoPage} from "./todo-page"
export class CrearPostPage{
  
  constructor(){
    this.todoPage = new TodoPage();
  }

  navigate(){
    cy.visit("http://localhost:2368/ghost/#/signin")
  }

  login(username,password){
    this.todoPage.login(username,password);
  }

  clickBotonCrearPost(){
    this.todoPage.clickBoton("a[title='New post']",1000)
  }

  infoParaPost(postTitle,postBody){
    this.todoPage.typeInElement(".gh-editor-title",postTitle);
    this.todoPage.clickBoton("body",0)
    
  }

  clickBotonVolver(){
    this.todoPage.clickBoton(".gh-editor-back-button",1000)
  }

  ultimoPostCreado(tituloPost){
    cy.get("a[href='#/posts/']").first().click();
    cy.wait(1000)
    cy.get('.gh-list-data.gh-post-list-title h3').should(($title) => {
      expect($title.first()).to.contain(tituloPost);
    });
  }
  
  publicarPost(){
    
    cy.wait(2000)
    this.todoPage.clickBoton('.gh-publishmenu .gh-btn-editor',0)
    this.todoPage.clickBoton('.gh-publishmenu-button',0)
    cy.wait(2000)
    cy.get('.gh-notification-title').should(($title) => {
      expect($title.first()).to.contain("Published");
      
    });
  }

  validarPostCreado(tituloPost){
    this.ultimoPostCreado(tituloPost);
  }

  publicarPostCreado(tituloPost){
    this.ultimoPostCreado(tituloPost);
    cy.get('.gh-list-data.gh-post-list-title').first().click({force: true});
    this.publicarPost();
  }

  publicarPostAccessMembers(tituloPost){
    this.ultimoPostCreado(tituloPost);
    cy.get('.gh-list-data.gh-post-list-title').first().click({force: true});
    cy.wait(1000);
    this.todoPage.clickBoton('.gh-actions-cog',500);
    cy.get('.gh-select select').select('members');
    this.todoPage.clickBoton('.settings-menu-header-action',500);
    this.publicarPost();
  }

  verPreviewDelPost(tituloPost){
    this.ultimoPostCreado(tituloPost);
    cy.get('.gh-list-data.gh-post-list-title').first().click({force: true});
    cy.wait(1000);
    this.todoPage.clickBoton('.gh-editor-preview-trigger',2000);
    
  }

}