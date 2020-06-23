'use strict';
module.exports = (sequelize, DataTypes) => {
  const score = sequelize.define('score', {
    score_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score_result: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    score_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    score_classify: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  score.associate = function(models) {
    // associations can be defined here
  };
  return score;
};