//import de mongoose
const mongoose = require('mongoose');

//import de mongoose-unique-validator
const uniqueValidator = require('mongoose-unique-validator');

//création de schéma mongoose User
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

//vérification de l'unicité de l'email dans la base de données
userSchema.plugin(uniqueValidator);

//export du schéma User
module.exports = mongoose.model('User', userSchema);
