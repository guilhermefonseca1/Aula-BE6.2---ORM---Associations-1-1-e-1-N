const express = require('express');
const courseRouter = require('./course.router');
const studentRouter = require('./student.router');

const routers = express.Router();

routers.use('/courses', courseRouter);
routers.use('/students', studentRouter);

module.exports = routers;