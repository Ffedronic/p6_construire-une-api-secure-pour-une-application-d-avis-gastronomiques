//import d'express
const express = require('express');

//import de multer-config
const multer = require('../middlewares/multer-config');

//import de auth
const auth = require('../middlewares/auth');

//création du routeur
const router = express.Router();

//import du controller sauce
const sauceCtrl = require('../controllers/sauce');

//route de création d'une sauce
router.post('/', auth, multer, sauceCtrl.createSauce);

//route pour modifier une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce);

//route pour supprimer une sauce
router.delete('/:id', auth, sauceCtrl.deleteSauce);

//route pour récupérer une sauce
router.get('/:id', auth, sauceCtrl.findOneSauce);

//route pour récupérer toutes les sauces
router.get('/', auth, sauceCtrl.findAllSauces);

//export du router
module.exports = router;
