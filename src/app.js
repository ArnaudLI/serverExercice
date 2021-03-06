const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')

const userService = require('./service/user.service')
const newsService = require('./service/news.service')
const productService = require('./service/product.service')

const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json('application/json'));

app.options('/*', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
});

app.post('/login', function(req, res) {
    const userParams = req.body
    const user = userService.login(userParams.name, userParams.password)
    if (user != null) {
        res.status(200).json(user)
    } else {
        res.status(401).json({})
    }
})

app.post('/user', function(req, res) {
    res.status(200).send('')
})

app.get('/user', function(req, res) {
    res.status(200).send('')
})

app.get('/news', function(req, res) {
    const news = newsService.getNews()
    res.status(200).json(news)
})

app.get('/products', function(req, res) {
    const products = productService.getProducts()
    res.status(200).json(products)
})

module.exports = app