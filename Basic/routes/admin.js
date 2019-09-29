const express = require('express');
const path = require('path');
const rootDir = require('../util/path.js');
const router = express.Router();

router.get('/add_product',(req,res,next)=>{
    //console.log('In another middleware!');
    res.sendFile(path.join(rootDir,'views','add_product.html'));
});

router.post('/add_product',(req,res,next)=>{    //app.get() for get request and app.post() for post request.
    //console.log('In another middleware!');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
