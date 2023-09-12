const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subject extends Model {}

Subject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'subject',
  }
);

module.exports = Subject;
