//import du schéma passwordSchema
const passwordSchema = require('../models/Password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        return res.status(401).json({
            message: 'le mot de passe doit contenir entre 8 et 100 caractères, contenant au moins une lettre majuscule, une lettre minuscule, 2 chiffres, pas de symboles et d\'espaces.'
        });
    } else {
        next();
    }
};