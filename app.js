var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/rio', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var gpsModels     = require('./models/gpsModel')(app, mongoose);
var gpsController = require('./controllers/gpsController');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var gpsShema = express.Router();

gpsShema.route('/gps')
  .get(gpsController.findAllRioShema)
//  .post(TVShowCtrl.addTVShow);

gpsShema.route('/gps/one')
  .get(gpsController.findOneRioShema)


gpsShema.route('/gps/bus')
  .get(gpsController.findAllBuses)


gpsShema.route('/gps/bus/:id')
  .get(gpsController.findBus)


gpsShema.route('/gps/:id')
  .get(gpsController.findById)
  //.put(TVShowCtrl.updateTVShow)
  //.delete(TVShowCtrl.deleteTVShow);

gpsShema.route('gps/count')
  .get(gpsController.count)

app.use('/api', gpsShema);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});