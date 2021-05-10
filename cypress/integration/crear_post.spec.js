/// <reference types="cypress" />
import { CrearPostPage} from "../page-objects/crear-post-page"


describe('Crear post', () => {
  const crearPostPage = new CrearPostPage()

  beforeEach(() => {
    crearPostPage.navigate();
  });


  context('Crear un post y volver a la pagina de posts',()=>{

    const tituloPost = "Ahora si que funciono esto"
    it('Crear un post 1',()=>{
    
      crearPostPage.login("andre0190@gmail.com","andres1503");
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('Crear un post 2',()=>{
      crearPostPage.login("andre0190@gmail.com","andres1503");
      crearPostPage.validarPostCreado(tituloPost);
      cy.wait(2000)
      
    });
  });

  context('Crear un post y publicarlo',()=>{

    const tituloPost = "Publicar este post"
    it('Creo el post que voy a publicar',()=>{
    
      crearPostPage.login("andre0190@gmail.com","andres1503");
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('Publico el post que cree',()=>{
      crearPostPage.login("andre0190@gmail.com","andres1503");
      crearPostPage.publicarPostCreado(tituloPost);
      cy.wait(2000)
      
    });
  });

  context('Publicar un post solo con acceso para miembros',()=>{

    const tituloPost = "Publicar este post"
    it('Creo el post que voy a publicar',()=>{
    
      crearPostPage.login("andre0190@gmail.com","andres1503");
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('Cambio el acceso y publico el post que cree',()=>{
      crearPostPage.login("andre0190@gmail.com","andres1503");
      crearPostPage.publicarPostAccessMembers(tituloPost);
      cy.wait(2000)
      
    });
  });

  context('Ver preview del post',()=>{

    const tituloPost = "Publicar este post"
    it('Creo el post que voy a publicar',()=>{
    
      crearPostPage.login("andre0190@gmail.com","andres1503");
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('ver el preview del post',()=>{
      crearPostPage.login("andre0190@gmail.com","andres1503");
      crearPostPage.verPreviewDelPost(tituloPost);
      cy.wait(2000)
      
    });
  });

 
})
