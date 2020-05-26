'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('scores', {
      score_idx: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      score_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      score_result: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      score_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      score_classify: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('scores');
  }
};