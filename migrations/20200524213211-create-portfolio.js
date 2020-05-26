'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('portfolios', {
      port_idx: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      port_template: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      port_job: {
        type: Sequelize.STRING,
        allowNull: false
      },
      port_skill: {
        type: Sequelize.STRING,
        allowNull: false
      },
      port_lang: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('portfolios');
  }
};