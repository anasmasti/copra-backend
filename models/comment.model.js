const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema =  new Schema({
    comment: {
        type: String,
        required: true
    },
    product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
    user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
}, {
    timestamps: true
});


const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment
