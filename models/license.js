'use strict';
module.exports = (sequelize, DataTypes) => {
  const license = sequelize.define('license', {
    license_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license_comp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      dateStrings: 'date',
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      dateStrings: 'date',
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  license.associate = function(models) {
    // associations can be defined here
  };
  return license;
};