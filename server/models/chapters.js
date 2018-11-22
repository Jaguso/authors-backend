'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chapters = sequelize.define('Chapters', {
    id: { 
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Chapters.associate = function(models) {
    // associations can be defined here
    Chapters.belongsTo(models.Books, {foreignKey: "bookId"})
  };
  return Chapters;
};