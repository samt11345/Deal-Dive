const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

// id, date, price, title, location, contact, image, subject_id

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        isDecimal: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    similarItem: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: '',
    },
    // This column will store a reference of the `id` of the `Subject` a post has
    subject_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `subject` model, which was set in `Subject.js` as its `modelName` property
        model: 'subject',
        key: 'id',
        type: DataTypes.DATE,
        default: Date.NOW,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;