var mongoose = require('mongoose');
var mongoSchema =   mongoose.Schema;

exports = module.exports = function(app, mongoose) {

	var gpsShema = new mongoSchema(

{
  "type": "object",
  "properties": {
    "bus_identifier": {
      "type": "string"
    },
    "longitude": {
      "type": "number"
    },
    "datetime": {
      "type": "string"
    },
    "location": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "coordinates": {
          "type": "array",
          "items": {}
        }
      }
    },
    "latitude": {
      "type": "number"
    },
    "velocity": {
      "type": "number"
    },
    "route_short_name": {
      "type": "number"
    }
  }
},{ collection : 'gps_route_552' }


  );

	mongoose.model('gps_route_552', gpsShema);

};
