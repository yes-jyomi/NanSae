'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      user_pwd: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_zipcode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      user_blog: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('user');
  }
};