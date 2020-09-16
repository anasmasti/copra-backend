"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
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
  type: {
    type: String,
    "default": 'user',
    required: true
  },
  datedecreation: {
    type: Date,
    "default": Date.now
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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
  }
}, {
  timestamps: true
});
var User = mongoose.model('User', UserSchema);
module.exports = User;