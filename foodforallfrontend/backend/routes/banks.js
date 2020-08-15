const router = require('express').Router();
let Bank = require('../models/bank.model');

router.route('/').get((req, res) => {
    Bank.find()
        .then(banks=> res.json(banks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const bankName = req.body.bankName;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const stateLocation = req.body.stateLocation;

    const newBank = new Bank({
        bankName,
        email,
        password,
        address,
        stateLocation,
      });

    newBank.save()
        .then(() => res.json('Bank added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:_id').get((req, res) => {
    Bank.findById(req.params._id) 
        .then(bank => res.json(bank))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;