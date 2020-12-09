const express = require('express')
const router = express.Router();
const destinationCtrl = require('../controllers/destinations')

router.get('/destinations/new', destinationCtrl.new)
router.post('/destinations', destinationCtrl.create)
router.post('/flights/:id/destinations', destinationCtrl.addToFlight)

module.exports = router;