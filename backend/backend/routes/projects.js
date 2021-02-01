const router = require('express').Router();
let Project = require('../models/projects.model');

router.route('/').get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
    
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const location = req.body.location;
  const skills = req.body.skills;
  const type = req.body.type;
  const rewards = req.body.rewards;
  const projectBeschrijving = req.body.projectBeschrijving;
  const takenBeschrijving = req.body.takenBeschrijving;

  const newProject = new Project({
    title,
    location,
    skills,
    type,
    rewards,
    projectBeschrijving,
    takenBeschrijving
  });

  newProject.save()
  .then(() => res.json('Project added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      project.username = req.body.username;
      project.description = req.body.description;
      project.duration = Number(req.body.duration);
      project.date = Date.parse(req.body.date);

      project.save()
        .then(() => res.json('Project updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;