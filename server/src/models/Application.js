const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  resumePath: String,
  parsedText: String,
  score: Number,
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['applied','shortlisted','rejected','hired'], default: 'applied' }
});

module.exports = mongoose.model('Application', appSchema);
