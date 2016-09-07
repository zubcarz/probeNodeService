
// var of enviroment and dependency
var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),//parce json
    methodOverride = require("method-override");//methods http
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

app.use(router);

//port of the server in http//:localhost:3000
app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});