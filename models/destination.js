const mongoose = require('mongoose')
const Schema = mongoose.Schema


const destinationSchema = new Schema ({
    destination: {type:'String', unique: true}
})

module.exports = mongoose.model('Destination', destinationSchema)