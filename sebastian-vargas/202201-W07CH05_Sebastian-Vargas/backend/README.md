## Back

Web server with Express & MongoDB
REST
Los recursos se definen por su url eg http://pokemos.con/poke/1
Las operaciones sobre esos recursos dependen del metodo http
GET -> read
POST -> create
PUT / PATCH -> update
DELETE -> delete

## Flujo en Express

index.js
Asocia una ruta y su fichero de rutas (routes/)
routes.js
Asocia cada subruta y método con sun controller (controllers/)
controller.js
instancia el modelo de datos
define cada una de las funciones que responden a una subruta/método y le pasa el Modelo a cada una de ellas
cada función depende de una funcón en el servicio (services/) que "conecta" con la DB
servicio.js
define cada una de las funciones que operan sobre el Modelo y en consecuencia, la DB
