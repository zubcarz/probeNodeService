
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


var GpsController = require('./Controllers/gps');

//api routes

var gps = express.Router();

gps.route('/gps')  
  .get(GpsController.findAllGPS)
  .post(GpsController.addGPSRegister);

gps.route('/gps/:id')  
  .get(GpsController.findGPSByID)
  .put(GpsController.updateGPS)
  .delete(GpsController.deleteGPS);

app.use('/api', gps);  
app.use(router);

//port of the server in http//:localhost:3000
app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});