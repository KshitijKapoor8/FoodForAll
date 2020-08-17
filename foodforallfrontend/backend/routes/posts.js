const router = require('express').Router();
let Post = require('../models/posts.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(banks=> res.json(banks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    bankName = req.body.bankName;
    bankAddress = req.body.bankAddress;
    bankState = req.body.bankState;
    item = req.body.item;
    itemCount = Number(req.body.itemCount);
    itemNeeded = Number(req.body.itemNeeded);
    
    const newPost = new Post({bankName, bankAddress, bankState, item, itemCount, itemNeeded});

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.bankName = req.body.bankName;
            post.bankAddress = req.body.bankAddress;
            post.bankState = req.body.bankState;
            post.item = req.body.item;
            post.itemCount = Number(req.body.itemCount);
            post.itemNeeded = Number(req.body.itemNeeded);

            post.save()
                .then(() => res.json('Post updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:_id').get((req, res) => {

    Post.findById(req.params._id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;