var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/geo');

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var winesShemas = new mongoSchema({  
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
// create model if not exists.
module.exports = mongoose.model('wines', winesShemas);  