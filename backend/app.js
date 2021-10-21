// import d'express
const express = require('express');

//import de mongoDB
const mongoose = require('mongoose');

// connexion à mongoDB
mongoose.connect('mongodb+srv://user_fedronic_felix:hottakes@cluster0.jtf3h.mongodb.net/Hottakes?retryWrites=true&w=majority', {
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


app.use((req, res) => {
    res.json({
        message: 'Votre requête a bien été reçue !'
    });
});

module.exports = app;