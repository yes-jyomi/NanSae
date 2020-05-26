'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    comp_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comp_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comp_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    comp_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    comp_project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comp_project_content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  company.associate = function(models) {
    // associations can be defined here
  };
  return company;
};