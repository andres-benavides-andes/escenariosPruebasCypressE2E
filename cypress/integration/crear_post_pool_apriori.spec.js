/// <reference types="cypress" />
import { CrearPostPage} from "../page-objects/crear-post-page"
import config from '../config.js'
import MOCK_DATA from '../MOCK_DATA_TITULOS_POST.json'



const faker = require('faker');

describe('Crear post', () => {
  const crearPostPage = new CrearPostPage()
  

  beforeEach(() => {
    crearPostPage.navigate();
  });

  
  context('Crear un post y volver a la pagina de posts',()=>{

    let titles = MOCK_DATA
    for( let rnd in titles){
      it('Crear un post 1',()=>{
        crearPostPage.login(config.email, config.password);
        crearPostPage.clickBotonCrearPost();
        crearPostPage.infoParaPost(titles[rnd].titulo);
        
      });
      
      it('Crear un post 2',()=>{
        crearPostPage.login(config.email, config.password);
        crearPostPage.validarPostCreado(titles[rnd].titulo);
        cy.wait(2000)
        
      });
    }
    
  });

  

 
})
