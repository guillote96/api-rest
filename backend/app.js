'use strict'

//cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser')

// ejecutar express (http)
var app= express();

//cargar ficheros de rutas
var articles_routes= require('./routes/article');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//CORS

//Añadir prefijos a rutas
app.use('/api',articles_routes);
//exportar modulo (fichero actual)
module.exports=app;