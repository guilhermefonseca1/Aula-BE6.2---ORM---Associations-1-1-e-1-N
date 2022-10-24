const express = require('express');
const studentController = require('../controllers/student.controller');

const router = express.Router();

router.get('/:id', studentController.findById);

module.exports = router;