//import d'express
const express = require('express');

//import de multer-config
const multer = require('../middlewares/multer-config');

//création du routeur
const router = express.Router();

//import du controller sauce
const sauceCtrl = require('../controllers/sauce');

//route de création d'une sauce
router.post('/', multer, sauceCtrl.createSauce);

//route pour modifier une sauce
router.put('/:id', multer, sauceCtrl.modifySauce);

//route pour supprimer une sauce
router.delete('/:id', sauceCtrl.deleteSauce);

//route pour récupérer une sauce
router.get('/:id', sauceCtrl.findOneSauce);

//route pour récupérer toutes les sauces
router.get('/', sauceCtrl.findAllSauces);

//export du router
module.exports = router;
