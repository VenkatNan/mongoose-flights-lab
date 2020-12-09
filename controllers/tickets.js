const Flight = require('../models/flight')

module.exports = {
    create
}

function create (req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.tickets.push({seat: req.body.seat, price: parseInt(req.body.price)})
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}