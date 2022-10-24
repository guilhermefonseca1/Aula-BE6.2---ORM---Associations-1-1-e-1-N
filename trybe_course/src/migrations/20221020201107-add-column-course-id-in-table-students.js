'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'course_id', { 
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'courses', // nome da tabela que essa coluna é FK
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'course_id');
  }
};
