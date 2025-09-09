const express = require('express');
const auth = require('../middleware/auth');
const Job = require('../models/Job');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'employer') return res.status(403).json({ error: 'Only employers' });
  const job = new Job({ ...req.body, employer: req.user._id });
  await job.save();
  res.json(job);
});

router.get('/', async (req, res) => {
  const { q, skill } = req.query;
  const filter = { isActive: true };
  if (q) filter.$text = { $search: q };
  if (skill) filter.skills = skill;
  const jobs = await Job.find(filter).populate('employer', 'company name');
  res.json(jobs);
});

router.get('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id).populate('employer', 'company name');
  if (!job) return res.status(404).json({ error: 'Not found' });
  res.json(job);
});

module.exports = router;
