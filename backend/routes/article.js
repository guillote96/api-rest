'use strict'

var express = require('express');
var ArticleController = require ('../controllers/article');


var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./upload/articles'});

router.get('/datosCursos', ArticleController.datosCursos);
router.get('/test', ArticleController.test);
router.post('/save', ArticleController.save);
router.get('/articles', ArticleController.articles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload/:id?',md_upload,ArticleController.upload);
router.get('/get-image/:name',ArticleController.getImage);
router.get('/buscar/:buscar',ArticleController.buscar);

module.exports = router;