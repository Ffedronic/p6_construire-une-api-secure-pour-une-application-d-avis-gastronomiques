//import d'express
const express = require('express');

//import emailCheckRegex pour vérifier la conformité de l'adresse mail
const emailCheckRegex = require('../middlewares/emailCheckRegex');

//import passwordValidator pour vérifier la conformité du mot de passe 
const passwordValidator = require('../middlewares/passwordValidator');

//création du router
const router = express.Router();

//import des controllers user
const userCtrl = require('../controllers/user');

//route pour l'inscription
router.post('/signup', emailCheckRegex, passwordValidator, userCtrl.signup);

//route pour la connexion
router.post('/login', userCtrl.login);

//export du router
module.exports = router;