/// <reference types="cypress" />
import { EditPostPage } from "../page-objects/editar-post-page";
import config from "../config.js";

describe("Editar post", () => {
  const editarPostPage = new EditPostPage();

  beforeEach(() => {
    editarPostPage.navigate();
  });

  const tituloPost = "Post editado en Cypress";
  it("Editar un post 1", () => {
    editarPostPage.login(config.email, config.password);
    editarPostPage.clickSeccionPosts();
    editarPostPage.getOnePost();
    editarPostPage.infoParaPost(tituloPost);
    editarPostPage.clickPublishMenu();
    editarPostPage.clickUpdateButton();
    editarPostPage.clickBotonVolver();
  });

  it("Despublicar un post 1", () => {
    editarPostPage.login(config.email, config.password);
    editarPostPage.clickSeccionPosts();
    editarPostPage.getOnePost();
    editarPostPage.clickPublishMenu();
    editarPostPage.clickUnpublishButton();
    editarPostPage.clickUpdateButton();
    editarPostPage.clickBotonVolver();
  });

  it("Editar el excerpt de un post", () => {
    editarPostPage.login(config.email, config.password);
    editarPostPage.clickSeccionPosts();
    editarPostPage.getOnePost();
    editarPostPage.clickConfigButton();
    editarPostPage.setExcerpt(" New content excerpt");
    editarPostPage.clickCloseConfigButton();
    editarPostPage.clickBotonVolver();
  });

  it("Editar la url de un post", () => {
    editarPostPage.login(config.email, config.password);
    editarPostPage.clickSeccionPosts();
    editarPostPage.getOnePost();
    editarPostPage.clickConfigButton();
    editarPostPage.setUrlPost("-new-part");
    editarPostPage.clickCloseConfigButton();
    editarPostPage.clickBotonVolver();
  });

  it("Editar la url de un post", () => {
    editarPostPage.login(config.email, config.password);
    editarPostPage.clickSeccionPosts();
    editarPostPage.getOnePost();
    editarPostPage.clickConfigButton();
    editarPostPage.clickDeletePost();
  });
});
