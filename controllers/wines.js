//File: controllers/tvshows.js
var mongoose = require('mongoose');
var TVShow  = mongoose.model('gps_route_552');

//GET - Return all tvshows in the DB
exports.findAllTVShows = function(req, res) {
	TVShow.find(function(err, tvshows) {
    if(err) res.send(500, err.message);

    console.log('GET /wines')
		res.status(200).jsonp(tvshows);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
    if(err) return res.send(500, err.message);

    console.log('GET /wines/' + req.params.id);
		res.status(200).jsonp(tvshow);
	});
};

//GET - Return a TVShow with specified ID
exports.count = function(req, res) {
    TVShow.find().count(function(err, count){
    if(err) res.send(500, err.message);
        console.log('GET /count')
		res.status(200).jsonp(count);
	});
};
