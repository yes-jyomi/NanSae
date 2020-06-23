'use strict';
module.exports = (sequelize, DataTypes) => {
  const activity = sequelize.define('activity', {
    act_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    act_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    act_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    act_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    act_content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  activity.associate = function(models) {
    // associations can be defined here
  };
  return activity;
};