// import d'express
const express = require('express');

//import des variables d'environnement
const dotenv = require("dotenv");
dotenv.config();

//import de mongoose pour se connecter à mongoDB
const mongoose = require('mongoose');

//import de la route user
const userRoutes = require('./routes/user');

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

//middleware User
app.use('/api/auth', userRoutes);

module.exports = app;