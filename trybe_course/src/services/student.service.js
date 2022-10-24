const { Student, Course } = require('../models');

// lazy loading
// const findById = async (id) => {
//   const student = await Student.findByPk(id);

//   const course = await Course.findByPk(student.courseId);

//   return { ...student.dataValues, course };
//   // return { ...student.toJSON(), course };
// };


// eager loading
const findById = (id) => Student.findByPk(id, {
  include: [
    { model: Course, as: 'curso' },
  ],
});

module.exports = {
  findById,
};