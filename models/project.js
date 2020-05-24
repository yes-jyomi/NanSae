'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    pr_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pr_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pr_skill: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pr_comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  project.associate = function(models) {
    // associations can be defined here
  };
  return project;
};