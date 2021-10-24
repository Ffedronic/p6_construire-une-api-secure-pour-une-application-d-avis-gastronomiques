//import d'express
const express = require('express');

//création du router
const router = express.Router();

//import des controllers user
const userCtrl = require('../controllers/user');

//route pour l'inscription
router.post('/signup', userCtrl.signup);

//route pour la connexion
router.post('/login', userCtrl.login);

//export du router
module.exports = router;