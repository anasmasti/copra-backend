"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var OrderDetailSchema = new Schema({
  order: {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  totalprice: {
    type: Number,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  v: {
    type: Boolean,
    "default": true,
    required: true
  },
  l: {
    type: Boolean,
    "default": false,
    required: true
  },
  r: {
    type: Boolean,
    "default": false,
    required: true
  }
}, {
  timestamps: true
});
var OrderDetail = mongoose.model('OrderDetail', OrderDetailSchema);
module.exports = OrderDetail;