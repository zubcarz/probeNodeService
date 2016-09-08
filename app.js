
// var of enviroment and dependency
var express = require("express"),  
    app = express(),
    http     = require("http"),
    server   = http.createServer(app),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');


//db connector
var mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/wines');  


app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

mongoose.connect('mongodb://localhost/wines', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});


//var GpsController = require('./controllers/gps');

//api routes

/*var gps = express.Router();

gps.route('/gps')  
  .get(GpsController.findAllGPS)
  .post(GpsController.addGPSRegister);

gps.route('/gps/:id')  
  .get(GpsController.findGPSByID)
  .put(GpsController.updateGPS)
  .delete(GpsController.deleteGPS);

app.use('/api', gps);  */
app.use(router);

//port of the server in http//:localhost:3000
/*app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});*/