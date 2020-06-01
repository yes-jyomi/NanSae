'use strict';
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    book_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  book.associate = function(models) {
    // associations can be defined here
  };
  return book;
};