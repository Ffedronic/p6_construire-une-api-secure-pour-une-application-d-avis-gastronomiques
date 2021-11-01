//création du module de vérification de la validité de l'email
module.exports = (req, res, next) => {
    regexEmail = /^[a-zA-Z0-9.!#$%&'*+/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const results = regexEmail.test(req.body.email); 
    if(!results){
        return res.status(401).json({message: 'adresse email invalide.'});
    } else {
        next();
    }
};