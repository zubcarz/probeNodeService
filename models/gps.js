var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var gpsShema = new Schema({  
  properties:    { 
    name : {type: String },
    description : { type : String},
    id : {type : String}
  },
  type:     { type: String },
  geometry:  { 
    coordinates : [],
    type : {type : String}
  },
});

module.exports = mongoose.model('wines', gpsShema);  