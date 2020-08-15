const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bankSchema = new Schema({
    bankName: {
        type: String,
        required: true,
        unique: true,
    },
    
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String, 
        required: true,
    },
    address: {
        type: String, 
        required: true,
    },
    stateLocation: {
        type: String,
        required: true,
    }
})

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;