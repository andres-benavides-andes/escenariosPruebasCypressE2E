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

  validarPostCreado(tituloPost){
    cy.get("a[href='#/posts/']").first().click();
    cy.wait(1000)
    cy.get('.gh-list-data.gh-post-list-title h3').should(($title) => {
      expect($title.first()).to.contain(tituloPost);
    });
    
    
  }
}