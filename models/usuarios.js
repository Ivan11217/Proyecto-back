//Importamos los datos de la conexión
var conn= require('./connection');
//Importamos el paquete mysql
var mysql = require('mysql2'),
//Creamos la conexión a nuestra base de datos con los datos almacenados en conn
connection = mysql.createConnection(conn);
 
//Creamos un objeto al que llamaremos usuarios
var usuarios = {};

//Añadir un nuevo usuario
usuarios.insertUsuario = function(usuarioData,callback){
	if (connection) {
		connection.query('INSERT INTO usuarios SET ?', usuarioData, function(error, result) {
			if(error){
				throw error;
			}
			else{
				//devolvemos el id del usuario insertado
				callback(null, result.insertId);
			}
		});
	}
}
 

module.exports =usuarios;