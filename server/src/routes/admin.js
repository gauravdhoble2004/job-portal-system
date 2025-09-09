const express = require('express');
const auth = require('../middleware/auth');
const Job = require('../models/Job');
const User = require('../models/User');

const router = express.Router();

router.use(auth);
router.use((req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin only' });
  next();
});

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post('/job/:id/deactivate', async (req, res) => {
  await Job.findByIdAndUpdate(req.params.id, { isActive: false });
  res.json({ success: true });
});

module.exports = router;
