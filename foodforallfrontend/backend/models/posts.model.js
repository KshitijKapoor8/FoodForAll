const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    bank: {
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