import { TodoPage } from "./todo-page";

export class EditPostPage {
  constructor() {
    this.todoPage = new TodoPage();
    this.step = 0;
  }

  setScenario(newScenario) {
    this.scenario = newScenario;
  }

  callScreenshot() {
    this.step++;
    this.todoPage.takeScreenshot(this.scenario, this.step);
  }

  navigate() {
    this.todoPage.navigate();
    this.callScreenshot();
  }

  login(username, password) {
    this.step++;
    this.todoPage.login(username, password, this.scenario, this.step);
    this.step = this.step + 2;
  }

  infoParaPost(postTitle) {
    this.todoPage.typeInElement(".gh-editor-title", postTitle);
    this.callScreenshot();
  }

  clickSeccionPosts() {
    cy.get("a[href='#/posts/']").first().click();
    this.callScreenshot();
  }

  clickBotonVolver() {
    this.todoPage.clickBoton("a[href='#/posts/'].blue.link.fw4.flex", 1000);
    this.callScreenshot();
  }

  getOnePost() {
    cy.get("a[href='#/posts/']").first().click();
    this.callScreenshot();
    cy.wait(1000);
    cy.get(".gh-list-data.gh-post-list-title").first().click({ force: true });
    this.callScreenshot();
  }

  validarPostEditado(tituloPost) {
    this.getOnePost(tituloPost);
    this.callScreenshot();
  }

  clickPublishMenu() {
    this.todoPage.clickBoton(".gh-publishmenu .gh-publishmenu-trigger", 1000);
    this.callScreenshot();
  }

  clickUpdateButton() {
    this.todoPage.clickBoton(".gh-publishmenu-button", 1000);
    this.callScreenshot();
  }

  clickUnpublishButton() {
    this.todoPage.clickBoton(".gh-publishmenu-radio:not(.active)", 1000);
    this.callScreenshot();
  }

  clickConfigButton() {
    this.todoPage.clickBoton(".post-settings", 500);
    this.callScreenshot();
  }

  setExcerpt(text) {
    cy.get("textarea[name='post-setting-custom-excerpt']").type(text, {
      force: true,
    });
    this.callScreenshot();
  }

  clickCloseConfigButton() {
    this.todoPage.clickBoton(".settings-menu-header-action", 500);
    this.callScreenshot();
  }

  setUrlPost(url) {
    cy.get("input[name='post-setting-slug']").type(url, {
      force: true,
    });
    this.callScreenshot();
  }

  clickDeletePost() {
    this.todoPage.clickBoton(".settings-menu-delete-button", 500);
    this.todoPage.clickBoton(".gh-btn-red", 500);
    this.callScreenshot();
  }
}
