const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

exports.bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;
    
    // Check if activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ success: false, error: 'Activity not found' });
    }
    
    // Check if user already booked this activity
    const existingBooking = await Booking.findOne({
      user: req.user.id,
      activity: activityId
    });
    
    if (existingBooking) {
      return res.status(400).json({
        success: false,
        error: 'You have already booked this activity'
      });
    }
    
    // Create booking
    const booking = await Booking.create({
      activity: activityId,
      user: req.user.id
    });
    
    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate({
        path: 'activity',
        select: 'title description location dateTime'
      })
      .sort({ bookingDate: -1 });
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    
    // Make sure user owns the booking
    if (booking.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to cancel this booking'
      });
    }

    console.log(booking);
    
    await Booking.findByIdAndDelete(booking._id);
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};