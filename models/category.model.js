const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema =  new Schema({
    title:{
        type: String,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },

}, {
    timestamps: true
});


const Category = mongoose.model('Category', CategorySchema);
module.exports = Category
