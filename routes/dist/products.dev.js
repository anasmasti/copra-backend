"use strict";

var Product = require('../models/product.model.js');

var express = require('express');

var router = express.Router();
router.post('/', function _callee(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          product = new Product({
            name: req.body.name,
            quick_name: req.body.quick_name,
            nbr_buyers: req.body.nbr_buyers,
            price: req.body.price,
            price_off: req.body.price_off,
            description: req.body.description,
            short_description: req.body.short_description,
            en_stock: req.body.en_stock,
            trend: req.body.trend,
            quantity: req.body.quantity,
            in_card: req.body.in_card,
            bg_color: req.body.bg_color,
            img_1: req.body.img_1,
            img_2: req.body.img_2,
            img_3: req.body.img_3,
            img_4: req.body.img_4,
            img_5: req.body.img_5,
            category: req.body.category,
            comment: req.body.comment
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(product.save().then(function (data) {
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
router.get('/', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Product.find().populate('category', 'title -_id').then(function (data) {
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
router.get('/trend', function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            trend: true
          }).populate('category', 'title -_id').then(function (data) {
            res.send(data);
          })["catch"](function (err) {
            res.status(500).send({
              message: err.message || "error retrieving."
            });
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get('/coprafood', function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            coprafood: true
          }).populate('category', 'title -_id').then(function (data) {
            res.send(data);
          })["catch"](function (err) {
            res.status(500).send({
              message: err.message || "error retrieving."
            });
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get('/coprapromo', function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            coprapromo: true
          }).populate('category', 'title -_id').then(function (data) {
            res.send(data);
          })["catch"](function (err) {
            res.status(500).send({
              message: err.message || "error retrieving."
            });
          }));

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router.get('/copraoriginal', function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            copraoriginal: true
          }).populate('category', 'title -_id').then(function (data) {
            res.send(data);
          })["catch"](function (err) {
            res.status(500).send({
              message: err.message || "error retrieving."
            });
          }));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  });
});
router.get('/p/:Id', function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(Product.findById(req.params.Id).then(function (data) {
            if (!data) {
              return res.status(404).send({
                message: "Note not found with id " + req.params.Id
              });
            }

            res.send(data);
          }));

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  });
});
router.get('/prod/:Id', function _callee8(req, res) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (!(req.params.Id === "5f3d1e6d8b3dd62824bebb9d")) {
            _context8.next = 5;
            break;
          }

          _context8.next = 3;
          return regeneratorRuntime.awrap(Product.find().populate('category', 'title -_id').then(function (data) {
            if (!data) {
              return res.status(404).send({
                message: "Note not found with id " + req.params.Id
              });
            }

            res.send(data);
          }));

        case 3:
          _context8.next = 7;
          break;

        case 5:
          _context8.next = 7;
          return regeneratorRuntime.awrap(Product.find({
            category: req.params.Id
          }).then(function (data) {
            if (!data) {
              return res.status(404).send({
                message: "Note not found with id " + req.params.Id
              });
            }

            res.send(data);
          }));

        case 7:
        case "end":
          return _context8.stop();
      }
    }
  });
});
router.put('/:Id', function _callee9(req, res) {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          if (req.body.content) {
            _context9.next = 2;
            break;
          }

          return _context9.abrupt("return", res.status(400).send({
            message: "content can't be empty"
          }));

        case 2:
          _context9.next = 4;
          return regeneratorRuntime.awrap(Product.findByIdAndUpdate(req.params.Id, {
            name: req.body.name,
            quick_name: req.body.quick_name,
            nbr_buyers: req.body.nbr_buyers,
            price: req.body.price,
            price_off: req.body.price_off,
            description: req.body.description,
            short_description: req.body.short_description,
            en_stock: req.body.en_stock,
            trend: req.body.trend,
            quantity: req.body.quantity,
            in_card: req.body.in_card,
            bg_color: req.body.bg_color,
            img_1: req.body.img_1,
            img_2: req.body.img_2,
            img_3: req.body.img_3,
            img_4: req.body.img_4,
            img_5: req.body.img_5,
            category: req.body.category
          }, {
            "new": true
          }).then(function (data) {
            if (!data) {
              return res.status(404).send({
                message: "Note not found with id " + req.params.Id
              });
            }

            res.send(data);
          }));

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
});
router["delete"]('/:Id', function _callee10(req, res) {
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(Product.findByIdAndRemove(req.params.Id).then(function (data) {
            if (!data) {
              return res.status(404).send({
                message: "Note not found with id " + req.params.Id
              });
            }

            res.send({
              message: "Note deleted successfully!"
            });
          }));

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  });
});
module.exports = router;