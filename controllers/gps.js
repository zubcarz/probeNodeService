var mongoose = require('mongoose');  
var GPS  = mongoose.model('wines');//database geo

//GET - Return all gps in the DB
exports.findAllGPS = function(req, res) {  
    GPS.find(function(err, gps) {
    if(err) res.send(500, err.message);

    console.log('GET /gps')
        res.status(200).jsonp(gps);
    });
};

//GET - Return all gps with specified ID]
exports.findGPSByID = function(req, res) {  
    GPS.findById(req.params.id, function(err, gps) {
    if(err) 
    return res.send(500,String(err.message));

    console.log('GET /gps/' + req.params.id);
        res.status(200).jsonp(gps);
    });
};


//POST - Insert a new gps in the DB
exports.addGPSRegister= function(req, res) {  
    console.log('POST');
    console.log(req.body);

    var gps = new GPS({
        properties:     req.body.properties,
        type:  req.body.type,
        geometry:   req.body.geometry
    });

    gps.save(function(err, gps) {
        if(err) return res.status(500).send(err.message);
    res.status(200).jsonp(gps);
    });
};

//PUT - Update a register already exists
exports.updateGPS = function(req, res) {  
    GPS.findById(req.params._id, function(err, gps) {
        gps.properties   = req.body.properties;
        gps.type    = req.body.type;
        gps.geometry = req.body.geometry;

        gps.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(gps);
        });
    });
};


//DELETE - Delete a GPS with specified ID
exports.deleteGPS= function(req, res) {  
    GPS.findById(req.params.id, function(err, gps) {
        gps.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
};