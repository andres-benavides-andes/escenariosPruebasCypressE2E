/// <reference types="cypress" />
import {Pagina} from "../page-objects/pagina"
import config from '../config.js'


describe('Editar página', () => {
  const pagina = new Pagina()
  const scenario = 'Editar una página'

  beforeEach(() => {
    pagina.setScenario(scenario);
    pagina.navigate();
  });


  context(scenario,()=>{

    const titulo = "Crear una página con Cypress para luego editarla"
    const edicion = " - Editada"
    const body = "Cuerpo del mensaje de prueba"
    it('Crear página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.clickBotonCrearPage();
      pagina.enterTituloPage(titulo);
    });
    
    it('Validar creación de página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.validarPageCreado(titulo);
    });
    
    it('Editar página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.clickPageCreada();
      pagina.enterTituloPage(edicion);
    });

    it('Validar edición de página',()=>{
      pagina.login(config.email, config.password);
      pagina.clickSeccionPages();
      pagina.validarPageCreado(titulo + edicion);
      pagina.clickPageCreada();
      pagina.eliminarPageCreada();
      pagina.logout();
      pagina.navigate();
    });
  });

 
})
