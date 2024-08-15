var express = require("express");
var cors = require("cors"); // Importa el paquete cors
var bodyParser = require("body-parser");
var router = express.Router();
var aplicacion = express();
var usuarios = require("./routes/rutasUsuario");

// Configura cors para permitir solicitudes desde tu frontend
aplicacion.use(cors({
  origin: 'http://localhost:4200', // Reemplaza con la URL de tu frontend si es diferente
}));

// Configura bodyParser para manejar JSON
aplicacion.use(bodyParser.json());

// Define una ruta básica
router.get('/', function(request, response) {
  response.status(200).json({"mensaje": "Nuestra primera app con node.js utilizando express"});
});

// Incluye el archivo en el que se almacenan las rutas de cada entidad
aplicacion.use(router);
aplicacion.use(usuarios);

// Inicia el servidor
aplicacion.listen(5000, function() {
  console.log("Servidor iniciado en el puerto 5000");
});
