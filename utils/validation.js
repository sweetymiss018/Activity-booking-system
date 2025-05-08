const Joi = require('joi');

// User registration validation schema
exports.registerSchema = Joi.object({
  name: Joi.string().required().max(50).trim(),
  email: Joi.string().email().required(),
  phone: Joi.string().required().trim(),
  password: Joi.string().min(6).required()
});

// User login validation schema
exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// Activity validation schema
exports.activitySchema = Joi.object({
  title: Joi.string().required().max(100).trim(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  dateTime: Joi.date().iso().required()
});

// Booking validation schema
exports.bookingSchema = Joi.object({
  activityId: Joi.string().required().hex().length(24)
});

// Middleware for validation
exports.validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }
    next();
  };
};