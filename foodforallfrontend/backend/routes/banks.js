const router = require('express').Router();
let Bank = require('../models/user.model');

router.route('/').get((req, res) => {
    Bank.find()
        .then(banks=> res.json(banks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const state = req.body.state;

    const newUser = new User({name, email, password, address, state});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;