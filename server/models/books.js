'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    id: { 
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
    Books.hasMany(models.Chapters)
    Books.belongsTo(models.Author)
  };
  return Books;
};