const express= require('express');

const path = require('path');
//const roodir =require('../util/path');

const admindata=require('./admin');

const router= express.Router();

router.get('/', (req, res, next) => {
    console.log(admindata.products);
    //res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
    //res.sendFile(path.join(rootdir, 'views', 'shop.html'));
    const products= admindata.products;
    res.render('shop',{pageTitle:'Shop', path:'/' , prods: products})


});

module.exports = router;