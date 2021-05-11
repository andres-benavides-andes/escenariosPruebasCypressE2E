import { TodoPage } from "./todo-page";

export class EditPostPage {
  constructor() {
    this.todoPage = new TodoPage();
  }

  navigate() {
    cy.visit("http://localhost:2368/ghost/#/signin");
  }

  login(username, password) {
    this.todoPage.login(username, password);
  }

  infoParaPost(postTitle) {
    this.todoPage.typeInElement(".gh-editor-title", postTitle);
  }

  clickSeccionPosts() {
    cy.get("a[href='#/posts/']").first().click();
  }

  clickBotonVolver() {
    this.todoPage.clickBoton(".gh-editor-back-button", 1000);
  }

  getOnePost() {
    cy.get("a[href='#/posts/']").first().click();
    cy.wait(1000);
    cy.get(".gh-list-data.gh-post-list-title").first().click({ force: true });
  }

  validarPostEditado(tituloPost) {
    this.getOnePost(tituloPost);
  }

  clickPublishMenu() {
    this.todoPage.clickBoton(".gh-publishmenu .gh-btn-editor", 1000);
  }

  clickUpdateButton() {
    this.todoPage.clickBoton(".gh-publishmenu-button", 1000);
  }

  clickUnpublishButton() {
    this.todoPage.clickBoton(".gh-publishmenu-radio:not(.active)", 1000);
  }

  clickConfigButton() {
    this.todoPage.clickBoton(".gh-actions-cog", 500);
  }

  setExcerpt(text) {
    cy.get("textarea[name='post-setting-custom-excerpt']").type(text, {
      force: true,
    });
  }

  clickCloseConfigButton() {
    this.todoPage.clickBoton(".settings-menu-header-action", 500);
  }

  setUrlPost(url) {
    cy.get("input[name='post-setting-slug']").type(url, {
      force: true,
    });
  }

  clickDeletePost() {
    this.todoPage.clickBoton(".settings-menu-delete-button", 500);
    this.todoPage.clickBoton(".gh-btn-red", 500);
  }
}
