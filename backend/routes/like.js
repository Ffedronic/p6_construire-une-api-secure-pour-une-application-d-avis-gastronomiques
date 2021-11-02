//import d'express
const express = require('express');

//création du routeur
const router = express.Router();

//import du controller like
const likeCtrl = require('../controllers/like');

//route pour like ou dislike d'une sauce
router.post('/:id/like', likeCtrl);

//import du router
module.exports = router;