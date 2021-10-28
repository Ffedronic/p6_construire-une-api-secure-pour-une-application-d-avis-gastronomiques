//import du model Sauce
const Sauce = require('../models/Sauce');

module.exports = (req, res, next) => {
    const like = req.body.like;
    const userId = req.body.userId;
    switch(like){
        case 1:
            Sauce.updateOne({ _id: req.params.id }, { $inc: {likes: +1 } }, { $push: { usersLiked: userId } })
                .then(res.status(200).json({ message: 'objet liké'}))
                .catch(error => res.status(400).json({ error }));
            break;
        case -1:
            Sauce.updateOne({ _id: req.params.id }, { $inc: {likes: -1 } }, { $push: { usersDisliked: userId } })
                .then(res.status(200).json({ message: 'objet disliké'}))
                .catch(error => res.status(400).json({ error }));
            break;
        case 0:
            sauce = Sauce.findOne({ _id: req.params.id});
            if(sauce.usersDisliked.includes(userId)){
                sauce.usersDisliked = sauce.usersDisliked.find(element => element != userId );
                sauce.likes += 1;
                sauce.save()
                    .then(res.status(200).json({message: 'dislike annulé'}))
                    .catch(error => res.status(400).json({error}));
            }
            if(sauce.usersLiked.includes(userId)){
                sauce.usersLiked = sauce.usersLiked.find(element => element != userId );
                sauce.likes -= 1;
                sauce.save()
                    .then(res.status(200).json({message: 'like annulé'}))
                    .catch(error => res.status(400).json({error}));
            }
            break;
    }

};