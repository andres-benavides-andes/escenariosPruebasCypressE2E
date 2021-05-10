/// <reference types="cypress" />
import {Pagina} from "../page-objects/pagina"


describe('Ver preview de página', () => {
  const pagina = new Pagina()

  beforeEach(() => {
    pagina.navigate();
  });


  context('Ver preview de una página',()=>{

    const titulo = "Ver preview de una página con Cypress"
    const body = "Cuerpo del mensaje de prueba"
    it('Crear página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.clickBotonCrearPage();
      pagina.enterTituloPage(titulo);
    });
    
    it('Ver preview de página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.clickPageCreada();
      pagina.verPreviewPage();
    });

    it('Eliminar página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.clickPageCreada();
      pagina.eliminarPageCreada();
      pagina.logout();
      pagina.navigate();
    });
  });

 
})
