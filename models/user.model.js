const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    type: { type: String, default: 'user',  required: true},
    datedecreation: { type: Date, default: Date.now },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min:6
    },
    confirmepassword: {
        type: String,
        required: true
    },
    sexe: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    codepostal: {
        type: String,
        required: true
    },
    addressedelivraison: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});


const User = mongoose.model('User', UserSchema);
UserSchema.plugin(uniqueValidator);
module.exports = User