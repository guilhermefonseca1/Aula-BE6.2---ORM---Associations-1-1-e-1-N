const studentService = require('../services/student.service');

const findById = async (req, res) => {
  const { id } = req.params;

  const student = await studentService.findById(id);

  res.status(200).json(student);
};

module.exports = {
  findById,
};