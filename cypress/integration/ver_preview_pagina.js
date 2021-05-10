/// <reference types="cypress" />
import {Pagina} from "../page-objects/pagina"
import config from '../config.js'

describe('Ver preview de página', () => {
  const pagina = new Pagina()

  beforeEach(() => {
    pagina.navigate();
  });


  context('Ver preview de una página',()=>{

    const titulo = "Ver preview de una página con Cypress"
    const body = "Cuerpo del mensaje de prueba"
    it('Crear página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.clickBotonCrearPage();
      pagina.enterTituloPage(titulo);
    });
    
    it('Ver preview de página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.clickPageCreada();
      pagina.verPreviewPage();
    });

    it('Eliminar página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.clickPageCreada();
      pagina.eliminarPageCreada();
      pagina.logout();
      pagina.navigate();
    });
  });

 
})
