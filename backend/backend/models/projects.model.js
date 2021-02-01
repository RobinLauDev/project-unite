const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  title: { type: String, required: true },
  location: { type: Object, required: true },
  skills: { type: Object, required: true },
  type: { type: Object, required: true },
  rewards: { type: Object, required: true },
  projectBeschrijving: { type: String, required: true },
  takenBeschrijving: { type: String, required: true }
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectsSchema);

module.exports = Project;