/// <reference types="cypress" />
import { CrearPostPage} from "../page-objects/crear-post-page"
import config from '../config.js'


describe('Crear post', () => {
  const crearPostPage = new CrearPostPage()

  beforeEach(() => {
    crearPostPage.navigate();
  });


  context('Crear un post y volver a la pagina de posts',()=>{

    const tituloPost = "Ahora si que funciono esto"
    it('Crear un post 1',()=>{
    
      crearPostPage.login(config.email, config.password);
      crearPostPage.clickBotonCrearPost();
      crearPostPage.infoParaPost(tituloPost);
      //crearPostPage.clickBotonVolver();
    });

    it('Crear un post 2',()=>{
      crearPostPage.login(config.email, config.password);
      crearPostPage.validarPostCreado(tituloPost);
      cy.wait(2000)
      
    });
  });

 
})
