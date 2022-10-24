const express = require('express');
const courseController = require('../controllers/course.controller');

const router = express.Router();

router.post('/', courseController.createCourse);
router.get('/', courseController.getCourses);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.removeCourse);

module.exports = router;