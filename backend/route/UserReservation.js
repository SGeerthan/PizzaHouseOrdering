const express = require('express');
const router = express.Router();
const reservationController = require('../controller/UserReservation');

router.post('/reservations', reservationController.createReservation);
router.get('/getReservations', reservationController.getReservations);
router.delete('/deleteReservation',reservationController.deleteReservations);

module.exports = router;
