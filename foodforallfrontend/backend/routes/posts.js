const router = require('express').Router();
let Post = require('../models/posts.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(banks=> res.json(banks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    bank = req.body.bank;
    item = req.body.item;
    itemCount = Number(req.body.itemCount);
    itemNeeded = Number(req.body.itemNeeded);
    
    const newPost = new Post({bank, item, itemCount, itemNeeded});

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;