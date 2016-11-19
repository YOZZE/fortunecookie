

//creando el handler 
//getfortune 
var colors = require ("colors");
colors.setTheme(require("../config/config").colorTheme);

var fortune = require ("./fortune");
var _crackTheCookie = function (req, res){
    console.log("> Cookie crash requested...");
    res.end ("El exito es la suma del trabajo mas la disciplina");
    fortune.getFortune(function (fortunePaperObj){
        //preparando para contestar con jJson
        res.writeHead(200,{
            "Content-Type": "aplication/json"
            
        });
        //respondiendo con el objeto
        res.end (fortunePaperObj);
    });
    
};

var _getAuthor = function(req, res){
    console.log ("> Se solicito:Autor..");
    res.end("Author: Yocelin Vazquez Carrillo");
    
};
//  Creando Objeto manejado

var handlers ={};

//  Registrando manejadores en el 
//Objeto manejador
handlers["/crackthecookie"] = _crackTheCookie;
handlers["/getAuthor"] = _getAuthor;

// Exportando objeto manejador

module.esports = handlers;

