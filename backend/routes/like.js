//import d'express
const express = require('express');

//création du routeur
const router = express.Router();

//import du controller sauce
const likeCtrl = require('../controllers/like');

//route de création d'une sauce
router.post('/:id/like', likeCtrl);

//import du router
module.exports = router;