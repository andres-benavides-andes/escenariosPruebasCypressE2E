/// <reference types="cypress" />
import {Pagina} from "../page-objects/pagina"
import config from '../config.js'


describe('Programar publicación de página', () => {
  const pagina = new Pagina()
  const scenario = 'Programar publicación de una página'

  beforeEach(() => {
    pagina.setScenario(scenario);
    pagina.navigate();
  });


  context(scenario,()=>{

    const titulo = "Programar publicación de una página con Cypress"
    const body = "Cuerpo del mensaje de prueba"
    it('Crear página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.clickBotonCrearPage();
      pagina.enterTituloPage(titulo);
    });
    
    it('Programar publicación de página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.clickPageCreada();
      pagina.programarPublicacionPage();
    });

    it('Validar página programada',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.validarPageCreado(titulo);
      cy.wait(2000);
      pagina.clickPageCreada();
      pagina.eliminarPageCreada();
      pagina.logout();
      pagina.navigate();
    });
  });

 
})
