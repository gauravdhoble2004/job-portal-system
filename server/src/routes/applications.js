const express = require('express');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const Application = require('../models/Application');
const Job = require('../models/Job');
const { parseResume } = require('../utils/resumeParser');
const { scoreCandidate } = require('../utils/jobMatcher');

const router = express.Router();

router.post('/apply/:jobId', auth, upload.single('resume'), async (req, res) => {
  try {
    if (req.user.role !== 'candidate') return res.status(403).json({ error: 'Only candidates' });
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    const resumePath = req.file.path;
    const parsedText = await parseResume(resumePath);
    const score = scoreCandidate(parsedText, job);
    const application = new Application({
      candidate: req.user._id,
      job: job._id,
      resumePath,
      parsedText,
      score
    });
    await application.save();
    res.json({ application });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/job/:jobId', auth, async (req, res) => {
  const job = await Job.findById(req.params.jobId);
  if (!job) return res.status(404).json({ error: 'Job not found' });
  if (String(job.employer) !== String(req.user._id) && req.user.role !== 'admin')
    return res.status(403).json({ error: 'Forbidden' });
  const apps = await Application.find({ job: job._id }).populate('candidate', 'name email');
  res.json(apps);
});

module.exports = router;
