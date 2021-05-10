/// <reference types="cypress" />
import {Pagina} from "../page-objects/pagina"


describe('Editar página', () => {
  const pagina = new Pagina()

  beforeEach(() => {
    pagina.navigate();
  });


  context('Editar una página',()=>{

    const titulo = "Crear una página con Cypress para luego editarla"
    const edicion = " - Editada"
    const body = "Cuerpo del mensaje de prueba"
    it('Crear página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.clickBotonCrearPage();
      pagina.enterTituloPage(titulo);
    });
    
    it('Validar creación de página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.validarPageCreado(titulo);
    });
    
    it('Editar página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.clickPageCreada();
      pagina.enterTituloPage(edicion);
    });

    it('Validar edición de página',()=>{
      pagina.login("as.santamaria@uniandes.edu.co","sucontraseña");
      pagina.clickSeccionPages();
      pagina.validarPageCreado(titulo + edicion);
      pagina.clickPageCreada();
      pagina.eliminarPageCreada();
      pagina.logout();
      pagina.navigate();
    });
  });

 
})
