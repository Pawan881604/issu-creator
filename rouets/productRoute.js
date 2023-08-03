const express = require('express');
const { project, createProject, UpdateForm, UpdateFormProject, projectDelete } = require('../controller/projectController');
const router = express.Router();
// this is project route here is get and post routs
router.route('/:id').get(project)
router.route('/api/create/project').post(createProject)
router.route('/update/:id').get(UpdateForm)
router.route('/api/update').post(UpdateFormProject)
router.route('/delete/:id').get(projectDelete)


module.exports = router;