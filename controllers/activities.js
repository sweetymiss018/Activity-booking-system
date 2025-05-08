const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ dateTime: 1 });
    
    res.status(200).json({
      success: true,
      count: activities.length,
      data: activities
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.getActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    
    if (!activity) {
      return res.status(404).json({ success: false, error: 'Activity not found' });
    }
    
    res.status(200).json({
      success: true,
      data: activity
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.createActivity = async (req, res) => {
  try {
    const { title, description, location, dateTime } = req.body;
    
    const activity = await Activity.create({
      title,
      description,
      location,
      dateTime
    });
    
    res.status(201).json({
      success: true,
      data: activity
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};