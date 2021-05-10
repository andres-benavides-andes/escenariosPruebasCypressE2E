/// <reference types="cypress" />
import {Pagina} from "../page-objects/pagina"


describe('Programar publicación de página', () => {
  const pagina = new Pagina()

  beforeEach(() => {
    pagina.navigate();
  });


  context('Programar publicación de una página',()=>{

    const titulo = "Programar publicación de una página con Cypress"
    const body = "Cuerpo del mensaje de prueba"
    it('Crear página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.clickBotonCrearPage();
      pagina.enterTituloPage(titulo);
    });
    
    it('Programar publicación de página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.clickPageCreada();
      pagina.programarPublicacionPage();
    });

    it('Validar página programada',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
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
