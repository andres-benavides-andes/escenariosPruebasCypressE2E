# Requerimientos de ejecucion

Issues:  https://github.com/andres-benavides-andes/escenariosPruebasE2E/issues

Notas: 
- Ejecutar los pasos en el orden mencionado
- Antes de ejecutar la toma de fotos de las versiones, ingrese a Ghost y cierre la recomendación de actualización que se muestra en la parte superior.

## 1. Toma de fotos Ghost 3.3.0

Se debe tener corriendo localmente a ghost con la versión 3.3.0 en la direccion http://localhost:2368/

Se debe modificar el archivo ./cypress/config.js con el email y la password del usuario administrador del ghost en ejecucion

Se debe modificar el archivo ./cypress.json con el atributo "screenshotsFolder": "tvr/3.3.0"

El entorno local de cypress debe configurarse acorde a la rubrica mencionada en la clase

Se debe abrir el proyecto con cypress

Los esenarios de prueba a correr se encuentran en la carpeta ./cypress/integration/

Ejecutar el comando ghost stop

Ir a la raíz del repo y en la carpeta tvr/3.3.0 estarán las fotos de los pasos de las pruebas por escenario

## 2. Toma de fotos Ghost 3.42.5

Se debe tener corriendo localmente a ghost con la versión 3.42.5 en la direccion http://localhost:2368/

Se debe modificar el archivo ./cypress/config.js con el email y la password del usuario administrador del ghost en ejecucion

Se debe modificar el archivo ./cypress.json con el atributo "screenshotsFolder": "tvr/3.42.5"

El entorno local de cypress debe configurarse acorde a la rubrica mencionada en la clase

Se debe abrir el proyecto con cypress

Los esenarios de prueba a correr se encuentran en la carpeta ./cypress/integration/

Ejecutar el comando ghost stop

Ir a la raíz del repo y en la carpeta tvr/3.42.5 estarán las fotos de los pasos de las pruebas por escenario

## 3. Comaparación con resemble

Estando en la raíz del repo, ingresar a la carpeta resemble

El entorno local de resemble debe configurarse acorde a la rubrica mencionada en la clase

Ejecutar el comando npm i para instalar dependencias

Ejecutar el comando node index.js

Ir a la raíz del repo y en la carpeta tvr/result estarán las fotos de comparación y el reporte html generado automáticamente

## 4. Comaparación con backstop

Estando en la raíz del repo, ingresar a la carpeta backstop

El entorno local de backstop debe configurarse acorde a la rubrica mencionada en la clase

Ejecutar el comando backstop reference

Ejecutar el comando backstop test, este abrira el reporte html generado por la herramienta



# Equipo

| Integrante                            | email                         |
| ------------------------------------- | ----------------------------- |
| Miguel Camargo                        | ma.camargo45@uniandes.edu.co  |
| Anderson Luis Cáceres Padilla         | al.caceres@uniandes.edu.co    |
| Andres Benavides                      | f.benavidesv@uniandes.edu.co  |
| Anderson Steve Santamaría Ballesteros | as.santamaria@uniandes.edu.co |

# Funcionalidades Core

## Funcionalidad Asociar TAG

### Esenarios de prueba

Esenario 1: Asociar un tag a un post:<br/> 1) Hago log in en la aplicacion ghost como administrador<br/> 2) Creo un tag con el nombre "testtag", y la descripcion "This is a sample tast"<br/> 3) Creo un post con el titulo "My testing"<br/> 4) Asocio el tag "testtag" con el post "My testing"<br/> 5) Valido la asociacion del tag "testtag" con el post "My testing"<br/> 6) Elimino el post con el título "My testing"<br/> 7) Elimino el tag con el nombre "testtag"<br/>
<br/>
Esenario 2: Asociar 3 tags a un post:<br/> 1) Hago log in en la aplicacion ghost como administrador<br/> 2) Creo un tag con el nombre "testtag1", y la descripcion "This is a sample tag 1"<br/> 3) Creo un tag con el nombre "testtag2", y la descripcion "This is a sample tag 2"<br/> 5) Creo un tag con el nombre "testtag3", y la descripcion "This is a sample tag 3"<br/> 6) Creo un post con el titulo "My testing 2"<br/> 7) Asocio el tag "testtag1" con el post "My testing 2"<br/> 8) Asocio el tag "testtag2" con el post "My testing 2"<br/> 9) Asocio el tag "testtag3" con el post "My testing 2"<br/> 10) Valido la asociacion del tag "testtag1" con el post "My testing 2"<br/> 11) Valido la asociacion del tag "testtag2" con el post "My testing 2"<br/> 12) Valido la asociacion del tag "testtag3" con el post "My testing 2"<br/> 13) Elimino el post con el título "My testing 2"<br/> 14) Elimino el tag con el nombre "testtag1"<br/> 15) Elimino el tag con el nombre "testtag2"<br/> 16) Elimino el tag con el nombre "testtag3"<br/>
<br/>
Esenario 3: Desasocio un tags de un post:<br/> 1) Hago log in en la aplicacion ghost como administrador<br/> 2) Creo un tag con el nombre "testtag", y la descripcion "This is a sample tast"<br/> 3) Creo un post con el titulo "My testing"<br/> 4) Asocio el tag "testtag" con el post "My testing"<br/> 5) Desasocio el tag "testtag" del post "My testing"<br/> 6) Valido que el tag "testtag" no esté relacionado con el post "My testing"<br/> 7) Elimino el post con el título "My testing"<br/> 8) Elimino el tag con el nombre "testtag"<br/>
<br/>
Esenario 4: Asocio un tag a 2 post:<br/> 1) Hago log in en la aplicacion ghost como administrador<br/> 2) Creo un tag con el nombre "testtag", y la descripcion "This is a sample tast"<br/> 3) Creo un post con el titulo "My First Post"<br/> 4) Creo un post con el titulo "My Second Post"<br/> 5) Asocio el tag "testtag" con el post "My First Post"<br/> 6) Asocio el tag "testtag" con el post "My Second Post"<br/> 7) Valido la asociacion del tag "testtag" con el post "My First Post"<br/> 8) Valido la asociacion del tag "testtag" con el post "My Second Post"<br/> 9) Elimino el post con el título "My First Post"<br/> 10) Elimino el post con el título "My Second Post"<br/> 11) Elimino el tag con el nombre "testtag"<br/>
<br/>
Esenario 5: Asocio un tag a una página:<br/> 1) Hago log in en la aplicacion ghost como administrador<br/> 2) Creo un tag con el nombre "testtag", y la descripcion "This is a sample tast"<br/> 3) Creo una página con el titulo "My new page"<br/> 4) Asocio el tag "testtag" con la página "My new page"<br/> 5) Valido la asociacion del tag "testtag" con la página "My new page"<br/> 6) Elimino la página con el título "My new page"<br/> 7) Elimino el tag con el nombre "testtag"<br/>

## Funcionalidades Crear, Editar, Eliminar Página

### Esenarios de prueba

<strong>Crear una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el botón “New page” → Escribir un título en el campo de título y escribir un mensaje en el campo para el contenido de la página → Ver que se creo la página (puede ser mediante el estado de la página que cambia a “Draft” o yendo a la sección “Pages”) → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Publicar una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el botón “New page” → Escribir un titulo en el campo de titulo y escribir un mensaje en el campo para el contenido de la página -> Dar click al botón “Publish” → seleccionar la opción de “set it live now” → Dar click al botón “Publish” → Ver que se publicó la página (puede ser mediante el estado que cambia a “Published” o yendo a la sección “Pages”) → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Programar publicación de una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el botón “New page” → Escribir un titulo en el campo de titulo y escribir un mensaje en el campo para el contenido de la página -> Dar click al botón “Publish” → seleccionar la opción de “Schedule for later” → Dar click al botón de “Schedule” → Ver que se programó la publicación de la página (puede ser mediante el estado de la página que cambia a “Scheduled” o yendo a la sección “Pages”) → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Ver el preview de una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el botón “New page” → Escribir un titulo en el campo de titulo y escribir un mensaje en el campo para el contenido de la página → Dar click en el botón “Settings”, luego click en el link “preview” → Dar click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Editar una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el botón “New page” → Escribir un título en el campo de título y escribir un mensaje en el campo para el contenido de la página → Volver a la sección “Pages” → Ver que existe la página → Volver a lapágina para editarla → Volver a la sección “Pages” → Ver que se hizo la modificación a la página → Volver a lapágina → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

## Funcionalidades Crear post

### Esenarios de prueba

<strong>Crear un post:</strong> Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post -> Darle clic al botón para volver a los posts → entonces la vista vuelve a la lista donde están todos los posts

<strong>Publicar un post:</strong> Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post -> Darle clic a las opciones de publicar → seleccionar la opción de “set it live now” → darle clic al botón de publicar → entonces puedo ver el mensaje de publicado

<strong>Publicar un post solo para miembros:</strong> Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post -> Darle clic a la configuración del post → en el select de Post access seleccionar Members Only→ cerrar las configuraciones del post → Darle clic a las opciones de publicar → seleccionar la opción de “set it live now” → darle clic al botón de publicar → entonces puedo ver el mensaje de publicado

<strong>Ver el preview de una post:</strong> Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post -> Darle clic al botón de preview → entonces se carga una vista donde se encuentra una etiqueta h1 con la clase artivle-title y el texto que se escribió en el titulo.

<strong>Programar publicación de un post :</strong> Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post -> Darle clic a las opciones de publicar → seleccionar la opción de “sSchedule for later” → seleccionar una fecha de publicación → seleccionar una hora de publicación -> darle clic al botón de schedule → ntonces puedo ver el mensaje de programado

## Funcionalidades principales: Editar un post, Despublicar post, Elimimar Post:

La funcionalidades bajo pruebas son editar, despublicar y eliminar los post que ya estan creados.

# Escenarios:

Editar un post: Logearse en Ghost → darle click a la seccion de ‘Posts’ → darle click a cualquier post del listado para editar → Editar titulo en el campo de titulo y editar algo en el campo para el contenido del post → Dar click en el boton de update → Dar click en el boton de update nuevamente → Darle click al botón para volver a los posts → entonces la vista vuelve a la lista donde están todos los posts.

Despublicar un post: Logearse en Ghost → darle click a la seccion de ‘Posts’ → darle click a cualquier post del listado para editar → Editar titulo en el campo de titulo y editar algo en el campo para el contenido del post → Dar click en el boton de update → Escoger la opcion Unpublish → Dar click en el boton de Unpublished → Darle click al botón para volver a los posts → entonces la vista vuelve a la lista donde están todos los posts.

Editar url de un post: Logearse en Ghost → darle click a la seccion de ‘Posts’ → darle click a cualquier post del listado para editar → Dar click en el boton de settings → Editar el campos Post Url → Darle click al botón para volver a los posts → entonces la vista vuelve a la lista donde están todos los posts.

Eliminar Post: Logearse en Ghost → darle click a la seccion de ‘Posts’ → darle click a cualquier post del listado para editar → Dar click en el boton de settings → Dar click en el boton delete post → Darle click al botón de confirmacion para boprrar el post → entonces la vista vuelve a la lista donde están todos los posts.

Editar Excerpt: Logearse en Ghost → darle click a la seccion de ‘Posts’ → darle click a cualquier post del listado para editar → Dar click en el boton de settings → Editar el valor del input Excerpt → Darle click al botón para volver a los posts → entonces la vista vuelve a la lista donde están todos los posts.
