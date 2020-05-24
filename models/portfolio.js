'use strict';
module.exports = (sequelize, DataTypes) => {
  const portfolio = sequelize.define('portfolio', {
    port_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    port_template: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    port_job: {
      type: DataTypes.STRING,
      allowNull: false
    },
    port_skill: {
      type: DataTypes.STRING,
      allowNull: false
    },
    port_lang: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  portfolio.associate = function(models) {
    // associations can be defined here
  };
  return portfolio;
};