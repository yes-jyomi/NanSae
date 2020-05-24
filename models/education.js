'use strict';
module.exports = (sequelize, DataTypes) => {
  const education = sequelize.define('education', {
    edu_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edu_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edu_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    edu_end: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  education.associate = function(models) {
    // associations can be defined here
  };
  return education;
};