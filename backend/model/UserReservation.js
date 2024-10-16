const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
    customerName : String,
    contactInfo : String,
    reservtion : Date,
    peopleCount : Number,
});

module.exports = mongoose.model("Reservation",ReservationSchema)