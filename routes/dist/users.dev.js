"use strict";

var User = require('../models/user.model.js');

var express = require('express');

var router = express.Router();

var jwt = require("jsonwebtoken");

var bcrypt = require("bcryptjs");

var SECRET_KEY = "secretkey23456";

var authJwt = require('../middlewares/authJwt.js');

var verifySignUp = require('../middlewares/authJwt.js');

var secret = "bezkoder-secret-key";
router.post('/register', function _callee(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user = new User({
            nom: req.body.nom,
            prenom: req.body.prenom,
            telephone: req.body.telephone,
            type: req.body.type,
            datedecreation: req.body.datedecreation,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            confirmepassword: bcrypt.hashSync(req.body.confirmepassword, 8),
            sexe: req.body.sexe,
            ville: req.body.ville,
            codepostal: req.body.codepostal,
            addressedelivraison: req.body.addressedelivraison
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(user.save().then(function (data) {
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
router.post('/login', function _callee2(req, res) {
  var email, password;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = req.body.email;
          password = req.body.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }, function (err, user) {
            if (err) {
              return res.status(500).send("Server error!");
            }

            if (!user) {
              return res.status(422).send("User not found");
            }

            if (user) {
              if (bcrypt.compareSync(password, user.password)) {
                var token = jwt.sign({
                  data: user
                }, secret, {
                  expiresIn: 604800
                });
                return res.status(200).json({
                  token: 'Bearer ' + token,
                  user: {
                    _id: user._id,
                    nom: user.nom,
                    prenom: user.prenom,
                    addressedelivraison: user.addressedelivraison,
                    telephone: user.telephone,
                    email: user.email
                  }
                });
              } else return res.status(400).send("Wrong password");
            }
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/', function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(User.find().then(function (data) {
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
router.get('/:id', function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(User.findById(req.params.id).then(function (data) {
            res.send(data);

            if (!data) {
              return res.status(404).send({
                message: "Note not found with id " + req.params.Id
              });
            }
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.put('/:Id', function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.params.Id, {
            nom: req.body.nom,
            prenom: req.body.prenom,
            telephone: req.body.telephone,
            type: req.body.type,
            email: req.body.email,
            sexe: req.body.sexe,
            ville: req.body.ville,
            codepostal: req.body.codepostal,
            addressedelivraison: req.body.addressedelivraison
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

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router.put('/password/:Id', function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.params.Id, {
            password: bcrypt.hashSync(req.body.password, 8),
            confirmepassword: bcrypt.hashSync(req.body.confirmepassword, 8)
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

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  });
});
router["delete"]('/:Id', function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(User.findByIdAndRemove(req.params.Id).then(function (data) {
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
          return _context7.stop();
      }
    }
  });
});
module.exports = router;