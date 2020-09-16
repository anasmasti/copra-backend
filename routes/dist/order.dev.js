"use strict";

var Order = require('../models/order.model.js');

var express = require('express');

var router = express.Router();
router.post('/', function _callee(req, res) {
  var order;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          order = new Order({
            product: req.body.product,
            user: req.body.user,
            quantity: req.body.quantity
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(order.save().then(function (data) {
            res.send(data);
          })["catch"](function (err) {
            res.status(500).send({
              message: err.message || "error creating."
            });
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/:userid', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Order.find({
            'user': req.params.userid
          }).populate('product', 'name price img_1 _id').populate('user', 'prenom _id').then(function (data) {
            res.send(data);
          })["catch"](function (err) {
            res.status(500).send({
              message: err.message || "error retrieving."
            });
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/count/ord/:userid', function _callee3(req, res) {
  var count;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Order.find({
            'user': req.params.userid
          }).countDocuments());

        case 2:
          count = _context3.sent;
          return _context3.abrupt("return", res.send(JSON.stringify(count)));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.put('/:Id', function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (req.body.content) {
            _context4.next = 2;
            break;
          }

          return _context4.abrupt("return", res.status(400).send({
            message: "content can't be empty"
          }));

        case 2:
          _context4.next = 4;
          return regeneratorRuntime.awrap(Order.findByIdAndUpdate(req.params.Id, {
            product: req.body.product,
            user: req.body.user,
            quantity: req.body.quantity
          }, {
            "new": true
          }).then(function (data) {
            if (!data) {
              return res.status(404).send({
                message: "order not found with id " + req.params.Id
              });
            }

            res.send(data);
          }));

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router["delete"]('/:Id', function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Order.findByIdAndDelete(req.params.Id).then(function (data) {
            if (!data) {
              return res.status(404).send({
                message: "order not found with id " + req.params.Id
              });
            }

            res.send({
              message: "order deleted successfully!"
            });
          }));

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = router;