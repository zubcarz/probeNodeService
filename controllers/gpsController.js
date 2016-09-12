//File: controllers/gps.js
var mongoose = require('mongoose');
var RioShema  = mongoose.model('gps_route_552');

//GET - Return all gps in the DB
exports.findAllRioShema = function(req, res) {
	RioShema.find(function(err, rioShema) {
    if(err) res.send(500, err.message);

    console.log('GET /wines')
		res.status(200).jsonp(rioShema);
	});
};


//GET - Return one gps in the DB
exports.findOneRioShema = function(req, res) {
	RioShema.findOne(function(err, rioShema) {
    if(err) res.send(500, err.message);
    console.log('GET /wines')
	
    	
        
    res.status(200).jsonp(rioShema);
	});
};  


//GET - Return all list of buses
exports.findAllBuses = function(req, res) {

    /*var query = RioShema.find({})
    .sort({bus_identifier: 1})
    .select(
        { "bus_identifier": 1,
         "_id": 0
        });*/
    /*var query = RioShema.find({})
    .distinct("bus_identifier")
    .sort({bus_identifier: 1});*/
        

    RioShema.find().distinct("bus_identifier", function(err, listBuses) {
     if(err) 
        {
            console.log("ERROR message -> "+String(err.message));
            return res.send(500, err.message);
        }
        console.log('GET /gps/bus');
	    res.status(200).jsonp(listBuses);
    });
};


//GET - Return all gps in the DB
exports.findBus = function(req, res) {

    var query = RioShema.find({"bus_identifier":req.params.id},{"_id":0,"longitude":0,"datetime":0,"date":0,"latitude":0,"velocity":0,"route_short_name":0});
 
    query.exec(function (err, rioShema) {
        if(err) 
        {
            console.log("ERROR message -> "+String(err.message));
            return res.send(500, err.message);
        }
        console.log('GET /gps/bus/'+ req.params.id);
	    res.status(200).jsonp(rioShema);
    });
};


//GET - Return a gps with specified ID
exports.findById = function(req, res) {
	RioShema.findById(req.params.id, function(err, rioShema) {
    if(err) return res.send(500, err.message);

    console.log('GET /wines/' + req.params.id);
	res.status(200).jsonp(rioShema);
	});
};

//GET - Return a gps  with specified ID
exports.count = function(req, res) {
    RioShema.find().count(function(err, count){
    if(err) res.send(500, err.message);
        console.log('GET /count')
		res.status(200).jsonp(count);
	});
};

/*
{
        "_id" : ObjectId("57c5693fe24455785b6f5e29"),
        "bus_identifier" : "A47767",
        "longitude" : -43.3262557983,
        "datetime" : "2016-04-01 15:39:39",
        "date" : ISODate("2016-04-01T15:39:39Z"),
        "location" : {
                "type" : "Point",
                "coordinates" : [
                        -43.3262557983,
                        -23.0113391876
                ]
        },
        "latitude" : -23.0113391876,
        "velocity" : 0,
        "route_short_name" : 552
}
*/

