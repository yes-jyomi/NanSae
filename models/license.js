'use strict';
module.exports = (sequelize, DataTypes) => {
  const license = sequelize.define('license', {
    license_idx: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
    license_name: DataTypes.STRING,
    license_comp: DataTypes.STRING,
    license_date: DataTypes.DATE
  }, {});
  license.associate = function(models) {
    // associations can be defined here
  };
  return license;
};