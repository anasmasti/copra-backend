const Product = require('../models/product.model.js');


var express = require('express');
var router = express.Router()



router.post('/', async (req, res) => {
  
    

    const product = new Product({
        name: req.body.name,
        quick_name: req.body.quick_name ,
        nbr_buyers: req.body.nbr_buyers ,
        price: req.body.price ,
        price_off: req.body.price_off ,
        description: req.body.description ,
        short_description: req.body.short_description ,
        en_stock: req.body.en_stock ,
        trend: req.body.trend ,
        quantity: req.body.quantity ,
        in_card: req.body.in_card ,
        bg_color: req.body.bg_color ,
        img_1: req.body.img_1 ,
        img_2: req.body.img_2 ,
        img_3: req.body.img_3 ,
        img_4: req.body.img_4 ,
        img_5: req.body.img_5 ,
        category: req.body.category ,
        comment: req.body.comment ,
    });
    await product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error creating."
        });
    });
});


router.get('/', async (req, res) => {
    await Product.find().populate('category','title -_id')
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});

router.get('/trend', async (req, res) => {
    await Product.find( {trend: true} ).populate('category','title -_id')
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});

router.get('/coprafood', async (req, res) => {
    await Product.find( {coprafood: true} ).populate('category','title -_id')
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});

router.get('/coprapromo', async (req, res) => {
    await Product.find( {coprapromo: true} ).populate('category','title -_id')
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});

router.get('/copraoriginal', async (req, res) => {
    await Product.find( {copraoriginal: true} ).populate('category','title -_id')
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});

router.get('/p/:Id', async (req, res) => {
    await Product.findById(req.params.Id).populate('category','title -_id')
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.Id
            });            
        }
        res.send(data);
    })
});


router.get('/prod/:Id', async (req, res) => {
    if (req.params.Id === "5f3d1e6d8b3dd62824bebb9d") {
        await Product.find().populate('category','title -_id')
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.Id
                });            
            }
            res.send(data);
        })
    }else{
        await Product.find({category: req.params.Id})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.Id
                });            
            }
            res.send(data);
        })
    }
    

});



router.put('/:Id', async (req, res) => {
   
    if(!req.body.content) {
        return res.status(400).send({
            message: "content can't be empty"
        });
    }

    await Product.findByIdAndUpdate(req.params.Id, {
        name: req.body.name,
        quick_name: req.body.quick_name ,
        nbr_buyers: req.body.nbr_buyers ,
        price: req.body.price ,
        price_off: req.body.price_off ,
        description: req.body.description ,
        short_description: req.body.short_description ,
        en_stock: req.body.en_stock ,
        trend: req.body.trend ,
        quantity: req.body.quantity ,
        in_card: req.body.in_card ,
        bg_color: req.body.bg_color ,
        img_1: req.body.img_1 ,
        img_2: req.body.img_2 ,
        img_3: req.body.img_3 ,
        img_4: req.body.img_4 ,
        img_5: req.body.img_5 ,
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
    await  Product.findByIdAndRemove(req.params.Id)
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