var http = require('http');
var fs = require('fs');
var mime=require('mime');
var colors = require('colors');
//estableciendo tema de colores
var staticServer = require ("./internals/static-server");
//Importando el objeto configurador
var config = require ('./config/config');
//Importando manejador
var handlers = require ("./internals/handlers");

colors.setTheme(config.colorTheme);
//importando configuraciones 
    var IP = config.IP,
        PORT = config.PORT;

var server = http.createServer(function (req, res) {
    
    var url  = req.url;
     console.log(`> Recurso Solicitado: ${url}`.data);
    if(url === "/"){
        url = '/index.html'
    }

    // verificando si la url esta asoiada a una accion que puede hacer el server
   
   
    if (typeof (handlers [url]) === "function"){
    
    //si esxiste un afuncion en hanlders llamada como el contenido de la variable "url"
    
    handlers[url](req, res);
    // no se encontro el manejado para url
    //solicita por el ususario
    //se intenta servir de manera estatica
}else {
    staticServer.serve(url, res);

}
    
});

server.listen(PORT, IP, function () {
    console.log(`>Server corriendo en http://${IP}:${PORT}...`.info);


});
