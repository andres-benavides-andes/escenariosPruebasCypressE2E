import { TodoPage} from "./todo-page"
export class CrearPostPage{
  
  constructor(){
    this.todoPage = new TodoPage();
    this.step = 0;
  }
  
  setScenario(newScenario){
    this.scenario = newScenario;
  }

  callScreenshot(){
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }

  navigate(){
    cy.visit("http://localhost:2368/ghost/#/signin")
    this.callScreenshot();
  }

  login(username,password){
    this.step++;
    this.todoPage.login(username,password, this.scenario, this.step);
    this.step = this.step+2;
  }



  clickBotonCrearPost(){
    this.todoPage.clickBoton(".gh-nav-new-post",1000)
    this.callScreenshot();
  }

  infoParaPost(postTitle,postBody){
    this.todoPage.typeInElement(".gh-editor-title",postTitle);
    this.todoPage.clickBoton("body",10)
    
  }

  clickBotonVolver(){
    this.todoPage.clickBoton(".gh-editor-back-button",1000)
    this.callScreenshot();
  }

  ultimoPostCreado(tituloPost){
    cy.get("a[href='#/posts/']").first().click();
    cy.wait(1000)
    cy.get('.gh-list-data.gh-post-list-title h3').should(($title) => {
      expect($title.first()).to.contain(tituloPost);
    });
    this.callScreenshot();
  }
  
  publicarPost(){
    
    cy.wait(2000)
    this.todoPage.clickBoton('.gh-publishmenu .gh-publishmenu-trigger',0)
    this.todoPage.clickBoton('.gh-publishmenu-button',0)
    cy.wait(2000)
    cy.get('.gh-publishmenu-button span').should(($title) => {
      expect($title.first()).to.contain("Published");
      
    });
    this.callScreenshot();
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
    this.callScreenshot();
    this.todoPage.clickBoton('.post-settings',500);
    cy.get('.post-setting-custom-excerpt').type('Texto para Expert');
    this.callScreenshot();
    this.todoPage.clickBoton('.close.settings-menu-header-action',500);
    this.publicarPost();
  }

  verPreviewDelPost(tituloPost){
    this.ultimoPostCreado(tituloPost);
    cy.get('.gh-list-data.gh-post-list-title').first().click({force: true});
    this.callScreenshot();
    cy.wait(1000);
    this.todoPage.clickBoton('.post-settings',500);
    this.callScreenshot();
    this.todoPage.clickBoton('.post-view-link',2000);
    
  }

  programarPostCreado(tituloPost){
    this.ultimoPostCreado(tituloPost);
    this.callScreenshot();
    cy.get('.gh-list-data.gh-post-list-title').first().click({force: true});
    cy.wait(2000)
    this.todoPage.clickBoton(".gh-publishmenu-trigger",1000)
    this.callScreenshot();
    cy.get(".gh-date-time-picker").then($pickers => {
      var picker = $pickers.get(0);
      if(!Cypress.dom.isHidden(picker)) {
        cy.wrap(picker).click({force: true});
      }
    });
    this.todoPage.clickBoton(".gh-publishmenu-button",3000)
    cy.wait(2000)
    this.callScreenshot();
    cy.get('.gh-publishmenu-button span').should(($title) => {
      expect($title.first()).to.contain("Scheduled");
      
    });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  cambiarUrl(newUrl){
    cy.get("a[href='#/posts/']").first().click();
    cy.wait(1000)
    cy.get('.gh-list-data.gh-post-list-title').first().click({force: true});
    cy.wait(1000);
    this.todoPage.clickBoton('.post-settings',500);
    cy.get("input[name='post-setting-slug']").clear();
    cy.get("input[name='post-setting-slug']").type(newUrl);
    this.todoPage.clickBoton('.ghost-url-preview',500)

    cy.get('.ghost-url-preview').should(($slug) => {
      expect($slug).to.contain(newUrl);
      
    });
  }

}