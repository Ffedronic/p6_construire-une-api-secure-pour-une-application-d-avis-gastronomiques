// import d'express
const express = require('express');

//import des variables d'environnement
const dotenv = require("dotenv");
dotenv.config();

//import de mongoose pour se connecter à mongoDB
const mongoose = require('mongoose');

// import path, donne accès au chemin de notre système de fichier
const path = require('path');

//import du router user
const userRoutes = require('./routes/user');

//import du router sauce
const sauceRoutes = require('./routes/sauce');

//import du routeur like
const likeRoute = require('./routes/like');

// connexion à mongoDB
mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//création de l'application express
const app = express();

// middleware pour supprimer la sécurité CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    next();
});

//middleware global, transforme le corps de la requete en objet javascript utilisable
app.use(express.json());

// indique à Express qu'il faut gerer la ressource images de manière statique à chaque requête reçue vers la route /images
// __dirname = nom du dossier dans lequel on va se trouver
app.use('/images', express.static(path.join(__dirname, 'images')));

//routes user
app.use('/api/auth', userRoutes);

//routes sauce
app.use('/api/sauces', sauceRoutes);

//route like
app.use('/api/sauces', likeRoute);

//export du module app
module.exports = app;