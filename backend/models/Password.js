//import de password validator
const passwordValidator = require('password-validator');

//création du schéma Password
const passwordSchema = new passwordValidator();

//model attendu du schéma
passwordSchema
    .is().min(8) // longueur minimal 8 caractères
    .is().max(100) // longueur maximal 100 caractères
    .has().uppercase() // contient au moins une lettre majuscule
    .has().lowercase() // contient au moins une lettre minuscule
    .has().digits(2) // contient au moins 2 chiffres
    .has().not().symbols() // ne contient pas de symboles
    .has().not().spaces() // ne contient pas d'espaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklister ces valeurs

//export du model schéma
module.exports = passwordSchema;