const express = require("express");
const { register, login } = require("../controllers/auth");
const { protect } = require("../middleware/auth");
const {
  validate,
  registerSchema,
  loginSchema,
} = require("../utils/validation");

const router = express.Router();

// Routes
router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);


module.exports = router;
