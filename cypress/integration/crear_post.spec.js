/// <reference types="cypress" />
import { CrearPostPage} from "../page-objects/crear-post-page"
import config from '../config.js'


describe('Crear post', () => {
  const crearPostPage = new CrearPostPage()

  beforeEach(() => {
    crearPostPage.navigate();
  });


  context('Crear un post y volver a la pagina de posts',()=>{
    crearPostPage.setScenario("Crear un post y volver a la pagina de posts");
    const tituloPost = "Ahora si que funciono esto"
    it('Crear un post 1',()=>{
      crearPostPage.login(config.email, config.password);
      //crearPostPage.clickBotonCrearPost();
      ///crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('Crear un post 2',()=>{
      crearPostPage.login(config.email, config.password);
      crearPostPage.validarPostCreado(tituloPost);
      cy.wait(2000)
      
    });
  });

  context('Crear un post y publicarlo',()=>{
    crearPostPage.setScenario("Crear un post y publicarlo");
    const tituloPost = "Publicar este post"
    it('Creo el post que voy a publicar',()=>{   
      crearPostPage.login(config.email, config.password);
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('Publico el post que cree',()=>{      
      crearPostPage.login(config.email, config.password);
      crearPostPage.publicarPostCreado(tituloPost);
      cy.wait(2000)
      
    });
  });

  context('Publicar un post con texto en Expert',()=>{
    crearPostPage.setScenario("Publicar un post con texto en Expert");
    const tituloPost = "Publicar este post"
    it('Creo el post que voy a publicar',()=>{   
      crearPostPage.login(config.email, config.password);
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('Cambio el acceso y publico el post que cree',()=>{      
      crearPostPage.login(config.email, config.password);
      crearPostPage.publicarPostAccessMembers(tituloPost);
      cy.wait(2000)
      
    });
  });

  context('Ver preview del post',()=>{
    crearPostPage.setScenario("Ver preview del post");
    const tituloPost = "Publicar este post"
    it('Creo el post que voy a publicar',()=>{
    
      crearPostPage.login(config.email, config.password);
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('ver el preview del post',()=>{
      crearPostPage.login(config.email, config.password);
      crearPostPage.verPreviewDelPost(tituloPost);
      cy.wait(2000)
      
    });
  });

  context('Programar publicación de un post',()=>{
    crearPostPage.setScenario("Programar publicación de un post");
    const tituloPost = "Publicar este post"
    it('Creo el post que voy a publicar',()=>{
    
      crearPostPage.login(config.email, config.password);
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('Programo la publicacion del post',()=>{
      crearPostPage.login(config.email, config.password);
      crearPostPage.programarPostCreado(tituloPost);
      cy.wait(2000)
      
    });
  });

 
})
