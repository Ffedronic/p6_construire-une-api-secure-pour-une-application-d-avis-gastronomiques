//import du model user
const User = require('../models/User');

//import de bcrpyt pour le hashage des mots de passe
const bcrypt = require('bcrypt');

//import jswebtoken
const jwt = require('jsonwebtoken');

//controller pour l'inscription
exports.signup = (req,res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then((hash) => {
        const user = new User({
            email: req.body.email,
            password: hash,
        });
        user.save()
            .then(() => res.status(201).json({ message: 'utilisateur créé !'}))
            .catch(error => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//controller pour la connexion
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if(!user) {
                return res.status(401).json({ error: 'utilisateur non trouvé'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if(!valid) {
                        return res.status(401).json({ error: 'mot de passe incorrect' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'HOTTAKES',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
};