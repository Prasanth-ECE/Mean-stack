const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const shared = require('./api/shared/shared')
const productRoutes = require('./api/products/products');

mongoose.connect('mongodb://restapi:'+ shared.mongdbpw +'@node-rest-api-shard-00-00-d0byw.mongodb.net:27017,node-rest-api-shard-00-01-d0byw.mongodb.net:27017,node-rest-api-shard-00-02-d0byw.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-api-shard-0&authSource=admin',
(err)=>{
    if(err){console.log(err)}
    else{console.log('DB Connected')}
})
mongoose.Promise = global.Promise;

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

//Routes
app.use('/products', productRoutes);

app.use(
 (req,res,next)=>{
     const error = new Error('404 not found');
     error.status = 404;
     next(error)
 }   
)

app.use(
    (error, req, res, next)=>{
        res.status(error.status || 500);
        res.json({
            error: {
                messgae: error.message
            }
        })
    }
)
module.exports = app;