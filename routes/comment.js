
const Comment = require('../models/comment.model.js');
var express = require('express');
var router = express.Router()



router.post('/', async (req, res) => {
    const comment = new Comment({
        comment : req.body.comment,
        user : req.body.user,
        product : req.body.product,
    });
    
    comment.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "error creating."
            });
        });
    
   
 
});


router.get('/', async (req, res) => {
    await  Comment.find().populate('user','nom _id').populate('product','name _id')
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});


router.get('/:id', async (req, res) => {
    await  Comment.find({'product' : req.params.id}).populate('user','prenom _id')
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

    await  Comment.findByIdAndUpdate(req.params.Id, {
        comment : req.body.comment,
        user : req.body.user,
        product : req.body.product,
        
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
    await  Comment.findByIdAndRemove(req.params.Id)
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