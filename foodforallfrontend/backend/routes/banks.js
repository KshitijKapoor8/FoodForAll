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

router.route('/:id').get((req, res) => {
    Bank.findById(req.params.id) 
        .then(bank => res.json(bank))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    Bank.findOne({email})
        .then(banks => {
            if(password === banks.password)
            {
                res.json(banks._id);
            }
            else
            {
                res.status(404).json('Wrong Credentials!');
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));

    
})


module.exports = router;