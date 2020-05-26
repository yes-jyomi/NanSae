'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    user_pwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    user_blog: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};