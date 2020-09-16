"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quick_name: {
    type: String,
    required: true
  },
  nbr_buyers: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  price_off: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  short_description: {
    type: String,
    required: true
  },
  en_stock: {
    type: Boolean,
    "default": true,
    required: true
  },
  trend: {
    type: Boolean,
    "default": true,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  coprafood: {
    type: Boolean,
    "default": false,
    required: true
  },
  coprapromo: {
    type: Boolean,
    "default": false,
    required: true
  },
  copraoriginal: {
    type: Boolean,
    "default": false,
    required: true
  },
  nouveaute: {
    type: Boolean,
    "default": true,
    required: true
  },
  img_1: {
    type: String,
    required: true
  },
  img_2: {
    type: String,
    required: true
  },
  img_3: {
    type: String,
    required: true
  },
  img_4: {
    type: String,
    required: true
  },
  img_5: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
    required: true
  }
}, {
  timestamps: true
});
var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;