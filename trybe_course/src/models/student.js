module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    courseId: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: false,
    //timestamps: false é usado quando as a tabela for criada sem as coluna: create e update
  });

  Student.associate = (models) => {
    Student.belongsTo(models.Course, {
      foreignKey: 'course_id',
      as: 'curso',
    })
  };

  return Student;
};

