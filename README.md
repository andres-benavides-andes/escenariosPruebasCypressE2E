
# Requerimientos de ejecucion
Se debe tener corriendo localmente a ghost en la direccion http://localhost:2368/

Se debe abrir el proyecto con cypress

Se debe modificar el archivo config.js con el email y la password del usuario administrador del ghost en ejecucion

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
Esenario 1: Asociar un tag a un post:<br/>
    1) Hago log in en la aplicacion ghost como administrador<br/>
    2) Creo un tag con el nombre "testtag", y la descripcion "This is a sample tast"<br/>
    3) Creo un post con el titulo "My testing"<br/>
    4) Asocio el tag "testtag" con el post "My testing"<br/>
    5) Valido la asociacion del tag "testtag" con el post "My testing"<br/>
    6) Elimino el post con el título "My testing"<br/>
    7) Elimino el tag con el nombre "testtag"<br/>
<br/>
Esenario 2: Asociar 3 tags a un post:<br/>
    1) Hago log in en la aplicacion ghost como administrador<br/>
    2) Creo un tag con el nombre "testtag1", y la descripcion "This is a sample tag 1"<br/>
    3) Creo un tag con el nombre "testtag2", y la descripcion "This is a sample tag 2"<br/>
    5) Creo un tag con el nombre "testtag3", y la descripcion "This is a sample tag 3"<br/>
    6) Creo un post con el titulo "My testing 2"<br/>
    7) Asocio el tag "testtag1" con el post "My testing 2"<br/>
    8) Asocio el tag "testtag2" con el post "My testing 2"<br/>
    9) Asocio el tag "testtag3" con el post "My testing 2"<br/>
    10) Valido la asociacion del tag "testtag1" con el post "My testing 2"<br/>
    11) Valido la asociacion del tag "testtag2" con el post "My testing 2"<br/>
    12) Valido la asociacion del tag "testtag3" con el post "My testing 2"<br/>
    13) Elimino el post con el título "My testing 2"<br/>
    14) Elimino el tag con el nombre "testtag1"<br/>
    15) Elimino el tag con el nombre "testtag2"<br/>
    16) Elimino el tag con el nombre "testtag3"<br/>
<br/>
Esenario 3: Desasocio un tags de un post:<br/>
    1) Hago log in en la aplicacion ghost como administrador<br/>
    2) Creo un tag con el nombre "testtag", y la descripcion "This is a sample tast"<br/>
    3) Creo un post con el titulo "My testing"<br/>
    4) Asocio el tag "testtag" con el post "My testing"<br/>
    5) Desasocio el tag "testtag" del post "My testing"<br/>
    6) Valido que el tag "testtag" no esté relacionado con el post "My testing"<br/>
    7) Elimino el post con el título "My testing"<br/>
    8) Elimino el tag con el nombre "testtag"<br/>
<br/>
Esenario 4: Asocio un tag a 2 post:<br/>
    1) Hago log in en la aplicacion ghost como administrador<br/>
    2) Creo un tag con el nombre "testtag", y la descripcion "This is a sample tast"<br/>
    3) Creo un post con el titulo "My First Post"<br/>
    4) Creo un post con el titulo "My Second Post"<br/>
    5) Asocio el tag "testtag" con el post "My First Post"<br/>
    6) Asocio el tag "testtag" con el post "My Second Post"<br/>
    7) Valido la asociacion del tag "testtag" con el post "My First Post"<br/>
    8) Valido la asociacion del tag "testtag" con el post "My Second Post"<br/>
    9) Elimino el post con el título "My First Post"<br/>
    10) Elimino el post con el título "My Second Post"<br/>
    11) Elimino el tag con el nombre "testtag"<br/>
<br/>
Esenario 5: Asocio un tag a una página:<br/>
    1) Hago log in en la aplicacion ghost como administrador<br/>
    2) Creo un tag con el nombre "testtag", y la descripcion "This is a sample tast"<br/>
    3) Creo una página con el titulo "My new page"<br/>
    4) Asocio el tag "testtag" con la página "My new page"<br/>
    5) Valido la asociacion del tag "testtag" con la página "My new page"<br/>
    6) Elimino la página con el título "My new page"<br/>
    7) Elimino el tag con el nombre "testtag"<br/>
  
## Funcionalidades Crear, Editar, Eliminar Página
### Esenarios de prueba

  <strong>Crear una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un título en el campo de título y escribir un mensaje en el campo para el contenido de la página → Ver que se creo la página (puede ser mediante el estado de la página que cambia a “Draft” o yendo a la sección “Pages”) → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Publicar una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un titulo en el campo de titulo y escribir un mensaje en el campo para el contenido de la página -> Dar click al botón “Publish” → seleccionar la opción de “set it live now” → Dar click al botón “Publish” → Ver que se publicó la página (puede ser mediante el estado que cambia a “Published” o yendo a la sección “Pages”) → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Programar publicación de una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un titulo en el campo de titulo y escribir un mensaje en el campo para el contenido de la página -> Dar click al botón “Publish” → seleccionar la opción de “Schedule for later” → Dar click al botón de “Schedule” → Ver que se programó la publicación de la página (puede ser mediante el estado de la página que cambia a “Scheduled” o yendo a la sección “Pages”) → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Ver el preview de una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un titulo en el campo de titulo y escribir un mensaje en el campo para el contenido de la página → Dar click en el botón “Settings”, luego click en el link “preview” → Dar click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.

<strong>Editar una página:</strong> Iniciar sesión en el admin de Ghost → dar click en la sección “Pages”, dar click en el  botón “New page” → Escribir un título en el campo de título y escribir un mensaje en el campo para el contenido de la página → Volver a la sección “Pages” → Ver que existe la página → Volver a lapágina para editarla → Volver a la sección “Pages” → Ver que se hizo la modificación a la página → Volver a lapágina → Dar click en el botón “Settings”, luego click en el botón “Delete Page”, y en el pop up dar click al botón “Delete” → Cerrar sesión en el admin de Ghost.


## Funcionalidades Crear post
### Esenarios de prueba

<strong>Crear un post:</strong> Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post -> Darle clic al botón para volver a los posts → entonces la vista vuelve a la lista donde están todos los posts

<strong>Publicar un post:</strong> Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post -> Darle clic a las opciones de publicar → seleccionar la opción de “set it live now” → darle clic al botón de publicar → entonces puedo ver el mensaje de publicado

<strong>Publicar un post solo para miembros:</strong> Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post    -> Darle clic a la configuración del post → en el select de Post access seleccionar Members Only→ cerrar las configuraciones del post → Darle clic a las opciones de publicar → seleccionar la opción de “set it live now” → darle clic al botón de publicar → entonces puedo ver el mensaje de publicado

<strong>Ver el preview de una post:</strong>  Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post -> Darle clic al botón de preview  → entonces se carga una vista donde se encuentra una etiqueta h1 con la clase artivle-title y el texto que se escribió en el titulo. 

<strong>Programar publicación de un post :</strong> Logearse en Ghost → darle clic al botón de agregar post → Escribir un titulo en el campo de titulo y escribir algo en el campo para el contenido del post    -> Darle clic a las opciones de publicar → seleccionar la opción de “sSchedule for later” → seleccionar una fecha de publicación → seleccionar una hora de publicación -> darle clic al botón de schedule → ntonces puedo ver el mensaje de programado