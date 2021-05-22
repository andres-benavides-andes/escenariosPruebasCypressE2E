/// <reference types="cypress" />
import { CrearPostPage} from "../page-objects/crear-post-page"
import config from '../config.js'

const faker = require('faker');

describe('Crear post', () => {
  const crearPostPage = new CrearPostPage()
  

  beforeEach(() => {
    crearPostPage.navigate();
  });

  
  context('Cambiar URL del post',()=>{

    
    for( let i=0; i<=10; i++ ){
      
      max = crearPostPage.getRandomInt(2,15);
      
      let url =[]

      for (let r = 1; r<=max; r++){
        url.push(faker.lorem.slug());
      }
      let newUrl = url.join("-");
      it('Crear un post 1',()=>{
        crearPostPage.login(config.email, config.password);
        crearPostPage.cambiarUrl(newUrl);
        
      });
      
      
    }
    
  });

  

 
})
