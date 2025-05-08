const express = require("express");
const {
  bookActivity,
  getMyBookings,
  cancelBooking,
} = require("../controllers/bookings");
const { protect } = require("../middleware/auth");
const { validate, bookingSchema } = require("../utils/validation");

const router = express.Router();

// Apply protect middleware to all routes
router.use(protect);

// Routes
router.post("/", validate(bookingSchema), bookActivity);
router.get("/me", getMyBookings);
router.delete("/:id", cancelBooking);

module.exports = router;
