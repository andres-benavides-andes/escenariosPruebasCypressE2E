/// <reference types="cypress" />
import {Pagina} from "../page-objects/pagina"
import config from '../config.js'

describe('Crear página', () => {
  const pagina = new Pagina()
  const scenario = 'Crear una página'

  beforeEach(() => {
    pagina.setScenario(scenario);
    pagina.navigate();
  });


  context(scenario,()=>{

    const titulo = "Creación de página con Cypress"
    const body = "Cuerpo del mensaje de prueba"
    it('Crear página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.clickBotonCrearPage();
      pagina.enterTituloPage(titulo);
    });

    it('Validar creación de la página',()=>{
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
