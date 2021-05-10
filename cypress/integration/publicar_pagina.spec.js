/// <reference types="cypress" />
import {Pagina} from "../page-objects/pagina"


describe('Publicar página', () => {
  const pagina = new Pagina()

  beforeEach(() => {
    pagina.navigate();
  });


  context('Publicar una página',()=>{

    const titulo = "Publicación de página con Cypress"
    const body = "Cuerpo del mensaje de prueba"
    it('Crear página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.clickBotonCrearPage();
      pagina.enterTituloPage(titulo);
    });
    
    it('Publicar página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.clickPageCreada();
      pagina.publicarPage();
    });

    it('Validar publicación de la página',()=>{
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
