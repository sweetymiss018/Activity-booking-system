const express = require('express');
const { 
  getActivities, 
  getActivity, 
  createActivity 
} = require('../controllers/activities');
const { protect } = require('../middleware/auth');
const { validate, activitySchema } = require('../utils/validation');

const router = express.Router();

// Routes
router.get('/', getActivities);
router.get('/:id', getActivity);
router.post('/', protect, validate(activitySchema), createActivity); 

module.exports = router;