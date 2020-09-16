const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema =  new Schema({
   
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        max:9
    }
    
}, {
    timestamps: true
});


const Order = mongoose.model('Order', OrderSchema);
module.exports = Order
