'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    id: { 
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Author.associate = function(models) {
    Author.hasMany(models.Books)
  };
  return Author;
};