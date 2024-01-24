exports.getAddProduct=(req, res, next) => { //---->/admin/add-product     then we omit the /admin
    // res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
    //res.sendFile(path.join(__dirname,'..', 'views', 'add-product.html'));   """for html"""
    // res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
    res.render('add-product',{pageTitle:"Add Product" , path:'/admin/add-product'})
};


const Product =require('../models/product');
exports.postAddProduct = (req, res, next) => {
    // use--->it executes for both POST & GET request or method.
    //products.push({title: req.body.title});
    const product=new Product(req.body.title);
    product.save();
    res.redirect("/");
  };

exports.getProduct=(req, res, next) => {
    // const products=Product.fetchAll(); // while storing in array
    // //res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
    // //res.sendFile(path.join(rootdir, 'views', 'shop.html'));
    // res.render('shop',{pageTitle:'Shop', path:'/' , prods: products});

    Product.fetchAll((products)=>{
        res.render('shop',{pageTitle:'Shop', path:'/' , prods: products});
    });   
};