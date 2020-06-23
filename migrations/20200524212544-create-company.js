'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('companies', {
      comp_idx: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comp_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comp_start: {
        type: Sequelize.DATE,
        allowNull: false
      },
      comp_end: {
        type: Sequelize.DATE,
        allowNull: false
      },
      comp_project_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comp_project_content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('companies');
  }
};