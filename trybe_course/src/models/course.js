module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
  },
  {
    tableName: 'courses',
    underscored: true,
  });

  Course.associate = (models) => {
    Course.hasMany(models.Student, {
      as: 'students',
      foreignKey: 'course_id',
    })
  }
  
  return Course;
};