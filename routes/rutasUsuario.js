//Importamos express
var express = require('express');
//Creamos el objeto para definir las rutas
var router = express.Router();
//Importamos el modelo que ejecutará las sentencias SQL
var usuariosModel = require('../models/usuarios');



//Insertar usuario
/*
Ejemplo de uso:
en el Body:
{ 
"nombre": "Usuario de Prueba"
}


*/
router.post('/usuario', function(request, response) { 
  var datosUsuario = {
      id : null,
      nombre : request.body.nombre,
      apellido : request.body.apellido,
      correo : request.body.correo,
      mensaje : request.body.mensaje
    };
    usuariosModel.insertUsuario(datosUsuario,function(error, datos)
    {
      if(datos){
        response.status(200).json({"Mensaje":"Insertado"});
      } else {
        response.status(500).json({"Mensaje":"Error"});
      }
    });
});

module.exports = router;