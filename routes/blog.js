
const Blog = require('../models/blog.model.js');
var express = require('express');
var router = express.Router()

router.post('/', async (req, res) => {
  
   

    const blog = new Blog({
        title: req.body.title , 
        img: req.body.img , 
        short_title: req.body.short_title , 
        desc: req.body.desc , 
        short_desc: req.body.short_desc , 
        category: req.body.category , 
    });
  await  blog.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error creating."
        });
    });
});


router.get('/', async (req, res) => {
    await  Blog.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});


router.get('/:Id', async (req, res) => {
    await  Blog.findById(req.params.Id)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.Id
            });            
        }
        res.send(data);
    })
});



router.put('/:Id', async (req, res) => {
   
    if(!req.body.content) {
        return res.status(400).send({
            message: "content can't be empty"
        });
    }

    await  Blog.findByIdAndUpdate(req.params.Id, {
        title: req.body.title , 
        img: req.body.img , 
        short_title: req.body.short_title , 
        desc: req.body.desc , 
        short_desc: req.body.short_desc , 
        category: req.body.category , 
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
    await Blog.findByIdAndRemove(req.params.Id)
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