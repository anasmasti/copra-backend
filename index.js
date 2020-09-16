const express = require('express')
const cors = require('cors')
const url = require('./config/db.config.js')
const bodyParser = require('body-parser')
const productsRouter = require('./routes/products.js')
const usersRouter = require('./routes/users.js')
const orderRouter = require('./routes/order.js')
const orderdetailRouter = require('./routes/order_detail.js')
const categoryRouter = require('./routes/category.js')
const blogRouter = require('./routes/blog.js')
const homeRouter = require('./routes/home.js')
const commentRouter = require('./routes/comment.js')
const mongoose = require('mongoose')
const app = express()
const port = 5000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
    origin : '*',
    methods : [
        'GET','POST','PUT','DELETE'
    ],
    allowedHeaders : 'Content-Type, X-Requested-With, Accept, Origin, Authorization'
}))




mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to MongoDB");    
}).catch(err => {
    console.log('Could not connect. Exiting now...', err);
    process.exit();
});



app.use('/', homeRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', orderRouter);
app.use('/api/orderdetail', orderdetailRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blog', blogRouter);
app.use('/api/comment', commentRouter);

app.listen(port, console.log("app run in port"+ port))