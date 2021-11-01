//création du module de vérification de la conformité du contenu des sauces
module.exports = (req, res, next) => {
    const inputRegex = /[^=!#$%&'*+?^_`{|}~-]/;
    const results = inputRegex.test(req.body.sauce);
    if(!results) {
        res.status(403).json({ message: 'le contenu contient au minimum 3 caractères, au maximum 200 caractères, ne contient pas de caractères spéciaux.'});
    } else {
        next();
    }
};