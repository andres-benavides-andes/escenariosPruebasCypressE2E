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
    
      crearPostPage.login("USERNAME","PASSWPRD");
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('Crear un post 2',()=>{
      crearPostPage.login("USERNAME","PASSWORD");
      crearPostPage.validarPostCreado(tituloPost);
      cy.wait(2000)
      
    });
  });

 
})
