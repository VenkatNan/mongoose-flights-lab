const Destination = require('../models/destination');
const Flight = require('../models/flight');

module.exports = {
    new: newDestination,
    create,
    addToFlight
};

function newDestination(req, res){
    Destination.find({})
        .then((destinations) => {res.render('destinations/new', { title: 'New Destination', destinations })
        })
        .catch((err) => {
            console.log(err)
        })
}

function create (req, res) {
    Destination.create(req.body, function(err, destination) {
        res.redirect('/destinations/new');
    });
}

function addToFlight(req, res){
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body.destination)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}