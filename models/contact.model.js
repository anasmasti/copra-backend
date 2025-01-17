const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema =  new Schema({
    message: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true
        },
    phone: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact
