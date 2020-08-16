const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    
    bankName: {
        type: String,
        required: true,
    },
    bankAddress: {
        type: String,
        required: true,
    },
    bankState: {
        type: String,
        required: true,
    },
    item: {
        type: String,
        required: true,
    },
    itemCount: {
        type: Number,
        required: true,
    },
    itemNeeded: {
        type: Number,
        required: true,
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;