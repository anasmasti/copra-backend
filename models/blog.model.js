const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema =  new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    short_title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

}, {
    timestamps: true
});


const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog
