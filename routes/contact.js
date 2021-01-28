
const Contact = require('../models/contact.model.js');
var express = require('express');
var router = express.Router()



router.post('/', async (req, res) => {
    const contact = new Contact({
        message : req.body.message,
        nom : req.body.nom,
        email : req.body.email,
        phone : req.body.phone,
    });
    
    contact.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "error creating."
            });
        });
    
   
 
});


router.get('/', async (req, res) => {
    await  Contact.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});




router.put('/:Id', async (req, res) => {
   
    if(!req.body.content) {
        return res.status(400).send({
            message: "content can't be empty"
        });
    }

    await  Contact.findByIdAndUpdate(req.params.Id, {
        message : req.body.message,
        nom : req.body.nom,
        mail : req.body.mail,
        phone : req.body.phone,
        
    }, {new: true})
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.Id
            });
        }
        res.send(data);
    })
});


router.delete('/:Id', async (req, res) => {
    await  Contact.findByIdAndRemove(req.params.Id)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.Id
            });
        }
        res.send({message: "Note deleted successfully!"});
    })
});


module.exports = router;