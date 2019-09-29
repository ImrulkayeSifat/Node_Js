//const http = require('http');
//const routes = require('./routes.js');
//const server = http.createServer(routes);
// const server = http.createServer(routes.handler);
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
// app.use((req,res,next)=>{
//     console.log('In the middleware!'); 
//     next();
// });

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);