const Reservation = require('../model/UserReservation'); 
exports.createReservation = async (req, res) => {
    try {
        const { customerName, contactInfo, reservation, peopleCount } = req.body;

        const newReservation = new Reservation({
            customerName,
            contactInfo,
            reservation,
            peopleCount,
        });

        const savedReservation = await newReservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteReservations = async (req, res) => {
    try {
    
      const reservationId = req.params.id;
      const reservation = await Pizza.findByIdAndDelete(reservationId);
      if (!reservation) {
        return res.status(404).json({ error: 'Pizza not found' });
      }
      res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  