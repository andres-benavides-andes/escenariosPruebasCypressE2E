
# Requerimientos de ejecucion
Se debe tener corriendo localmente a ghost en la direccion http://localhost:2368/

Se debe abrir el proyecto con cypress

El entorno local de cypress debe configurarse acorde a la rubrica mencionada en la clase

# Equipo
|Integrante|email|
|-------------------|-------------|
|Miguel Camargo|ma.camargo45@uniandes.edu.co|
|Anderson Luis Cáceres Padilla|al.caceres@uniandes.edu.co|
|Andres Benavides|f.benavidesv@uniandes.edu.co|
|Anderson Steve Santamaría Ballesteros|as.santamaria@uniandes.edu.co|

# Funcionalidades Core
## Funcionalidad Asociar TAG
### Esenarios de prueba
  Scenario: Associate a tag to a post
    Given I log in ghost local app as an administrator with this user "<EMAIL>" and password "<PASSWORD>"<br/>
    Then I create a tag with the name  "testtag", and the description "This is a sample tast"<br/>
    Then I create a draf post with the title "My testing"<br/>
    Then I associate the tag "testtag" with the post "My testing"<br/>
    Then I validate that tag "testtag" is associate with the post "My testing"<br/>
    Then I delete the post with the title "My testing"<br/>
    Then I delete the tag with the slug "testtag"<br/>

  Scenario: Associate 3 tags to a post
    Given I log in ghost local app as an administrator with this user "<EMAIL>" and password "<PASSWORD>"<br/>
    Then I create a tag with the name  "testtag1", and the description "This is the tag 1"<br/>
    Then I create a tag with the name  "testtag2", and the description "This is the tag 2"<br/>
    Then I create a tag with the name  "testtag3", and the description "This is the tag 3"<br/>
    Then I create a draf post with the title "My testing 2"<br/>
    Then I associate the tag "testtag1" with the post "My testing 2"<br/>
    Then I associate the tag "testtag2" with the post "My testing 2"<br/>
    Then I associate the tag "testtag3" with the post "My testing 2"<br/>
    Then I validate that tag "testtag1" is associate with the post "My testing 2"<br/>
    Then I validate that tag "testtag2" is associate with the post "My testing 2"<br/>
    Then I validate that tag "testtag3" is associate with the post "My testing 2"<br/>
    Then I delete the post with the title "My testing 2"<br/>
    Then I delete the tag with the slug "testtag1"<br/>
    Then I delete the tag with the slug "testtag2"<br/>
    Then I delete the tag with the slug "testtag3"<br/>

  Scenario: Detach a tag from a post
    Given I log in ghost local app as an administrator with this user "<EMAIL>" and password "<PASSWORD>"<br/>
    Then I create a tag with the name  "testtag", and the description "This is a sample tast"<br/>
    Then I create a draf post with the title "My testing"<br/>
    Then I associate the tag "testtag" with the post "My testing"<br/>
    Then I detach the the last tag associated to the post "My testing"<br/>
    Then I check that tag "testtag" don't have any post related<br/>
    Then I delete the post with the title "My testing"<br/>
    Then I delete the tag with the slug "testtag"<br/>

  Scenario: Assosiate a tag to 2 posts
    Given I log in ghost local app as an administrator with this user "<EMAIL>" and password "<PASSWORD>"<br/>
    Then I create a tag with the name  "testtag", and the description "This is a sample tast"<br/>
    Then I create a draf post with the title "My First Post"<br/>
    Then I create a draf post with the title "My Second Post"<br/>
    Then I associate the tag "testtag" with the post "My First Post"<br/>
    Then I associate the tag "testtag" with the post "My Second Post"<br/>
    Then I validate that tag "testtag" is associate with the post "My First Post"<br/>
    Then I validate that tag "testtag" is associate with the post "My Second Post"<br/>
    Then I delete the post with the title "My First Post"<br/>
    Then I delete the post with the title "My Second Post"<br/>
    Then I delete the tag with the slug "testtag"<br/>

  Scenario: Associate a tag with a page
    Given I log in ghost local app as an administrator with this user "<EMAIL>" and password "<PASSWORD>"<br/>
    Then I create a tag with the name  "testtag", and the description "This is a sample tast"<br/>
    Then I create a draf page with the title "My new Page"<br/>
    Then I associate the tag "testtag" with the page "My new Page"<br/>
    Then I validate that tag "testtag" is associate with a page<br/>
    Then I delete the page with the title "My new Page"<br/>
    Then I delete the tag with the slug "testtag"<br/>
  
## Funcionalidades Crear, Editar, Eliminar Página
### Esenarios de prueba

  <strong>Crear una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un título en el campo de título y escribir un mensaje en el campo para el contenido de la página → Ver que se creo la página (puede ser mediante el estado de la página que cambia a “Draft” o yendo a la sección “Pages”) → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Publicar una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un titulo en el campo de titulo y escribir un mensaje en el campo para el contenido de la página -> Dar click al botón “Publish” → seleccionar la opción de “set it live now” → Dar click al botón “Publish” → Ver que se publicó la página (puede ser mediante el estado que cambia a “Published” o yendo a la sección “Pages”) → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Programar publicación de una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un titulo en el campo de titulo y escribir un mensaje en el campo para el contenido de la página -> Dar click al botón “Publish” → seleccionar la opción de “Schedule for later” → Dar click al botón de “Schedule” → Ver que se programó la publicación de la página (puede ser mediante el estado de la página que cambia a “Scheduled” o yendo a la sección “Pages”) → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Ver el preview de una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un titulo en el campo de titulo y escribir un mensaje en el campo para el contenido de la página → Dar click en el botón “Settings”, luego click en el link “preview” → Dar click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Editar una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un título en el campo de título y escribir un mensaje en el campo para el contenido de la página → Volver a la sección “Pages” → Ver que existe la página → Volver a lapágina para editarla → Volver a la sección “Pages” → Ver que se hizo la modificación a la página → Volver a lapágina → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.
