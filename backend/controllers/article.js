'use strict'

var validator = require('validator');
var Article = require('../models/article');

var path = require('path');
var fs = require('fs');

//var split = require('split');
var controller = {
    datosCursos: (req, res) => {
        return res.status(200).send(
            {
                curso: 'Master en Framework',
                auto: 'Guille'
            }
        );
    },
    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion TEST de mis controlador Article'
        });
    },
    save: (req, res) => {
        var parametros = req.body;
        try {
            var validator_title = !validator.isEmpty(parametros.title);
            var validator_content = !validator.isEmpty(parametros.content);

        } catch (err) {
            return res.status(200).send({
                message: "Faltan DATOS!!!"
            });
        }

        if (validator_title && validator_content) {
            var articulo = new Article();
            articulo.title = parametros.title;
            articulo.content = parametros.content;
            articulo.image = null;

            console.log(articulo);
            articulo.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(400).send({
                        status: 'error',
                        message: "No se guardo en articulo"
                    });
                }

            });


            return res.status(200).send({
                status: 'success',
                article: parametros
            });

        } else {
            return res.status(200).send({
                message: "Parametros Invalidos!!"
            });
        }

    },
    articles: (req, res) => {
        Article.find({}).exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "No se buscaron los Articulos"
                });
            }

            if (!articles) {
                return res.status(401).send({
                    status: "error",
                    message: "No hay Articulos"
                });
            }

            return res.status(200).send({
                status: "success",
                articles
            });

        });
    },
    getArticle: (req, res) => {
        var id = req.params.id;

        if (id == null) {
            return res.status(401).send({
                status: "error",
                message: "Parametro Invalido!"
            });


        }
        Article.findById(id).exec((err, article) => {
            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "No se buscó un Articulo"
                });
            }

            if (!article) {
                return res.status(404).send({
                    status: "error",
                    message: "No existe el Articulo"
                });
            }

            return res.status(200).send({
                status: "success",
                article
            });

        });


    },
    update: (req, res) => {
        var id = req.params.id;
        var params = req.body;

        try {
            var validTitle = !validator.isEmpty(params.title);
            var validContent = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(500).send({
                status: "error",
                message: "Faltan Parametros!!!"
            });

        }

        if (validTitle && validContent) {
            Article.findOneAndUpdate(id, params, { new: true }, (err, articleUpdated) => {
                if (err) {
                    return res.status(500).send({
                        status: "error",
                        message: "No se pudo Actualizar"
                    });
                }

                if (!articleUpdated) {
                    return res.status(500).send({
                        status: "error",
                        message: "No se encontro el articulo del ID especificado"
                    });
                }

                return res.status(200).send({
                    status: "success",
                    articleUpdated
                });

            });
        } else {
            return res.status(500).send({
                status: "error",
                message: "Parametros Invalidos!!"
            });
        }


    },
    delete: (req, res) => {
        var id = req.params.id;
        Article.findByIdAndRemove(id, (err, articleDeleted) => {
            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "No se pudo eliminar Articulo!!"
                });
            }

            if (!articleDeleted) {
                return res.status(400).send({
                    status: "error",
                    message: "No se encontro el Articulo que se desea deletear"
                });
            }

            return res.status(200).send({
                status: "success",
                articleDeleted
            });

        });

    },
    upload: (req, res) => {
        var file_name = "Imagen no subida...";
        if (!req.files) {
            return res.status(400).send({
                status: "error",
                message: file_name
            });

        }

        var file_path = req.files.file0.path;
        var file_split = file_path.split("/");
        var name = file_split[2];
        var ext = name.split('\.')[1];

        if (ext != 'png' && ext != 'jpg' && ext != 'gif' && ext != 'jpeg') {
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: "error",
                    message: "No es una imagen!!"
                });

            });

        } else {
            var id = req.params.id;

            Article.findOneAndUpdate(id, { image: name }, { new: true }, (err, imageUpload) => {
                if (err || !imageUpload) {
                    return res.status(500).send({
                        status: "error",
                        message: "No se pudo subir la Imagen"
                    });
                }

                return res.status(200).send({
                    status: "success",
                    message: imageUpload
                });

            });



        }
    },
    getImage: (req, res) => {
        var nombre = req.params.name;
        var directorio = './upload/articles/' + nombre;
        fs.readFile(directorio, (err) => {
            if (err) {
                return res.status(400).send({
                    status: "error",
                    message: "No sencontró el archivo!"
                });

            } else {
                return res.sendFile(path.resolve(directorio));
            }

        });




    },
    buscar: (req, res) => {
        var buscar = req.params.buscar;
        Article.find({'title': {'$regex': buscar, '$options': 'i'}}, (err, articulos) => {
            if (err || !articulos) {
                return res.status(500).send({
                    status: "error",
                    message: "No se pudo encontrar articulos"
                });
            }

            return res.status(200).send({
                status: "success",
                articulos: articulos
            });
        });
    }


}
module.exports = controller;