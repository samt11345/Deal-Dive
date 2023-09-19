const User = require('./User');
const Post = require('./Post');
const Subject = require('./Subject');
const UsersPost = require('./UsersPost.js');

// A Post has one subject to create a foreign key in the 'subject' table
Post.hasOne(Subject, {
  foreignKey: 'subject_id',
  through: {
    model: Subject,
    unique: false,
  },
});

// A Subject has many Posts, thus creating a foreign key in the `post` table
Subject.hasMany(Post, {
  foreignKey: 'subject_id',
});

// A Post has one user to create a foreign key in the 'user' table
Post.hasOne(User, {
  foreignKey: 'user_id',
});

// A User has many Posts, thus creating a foreign key in the `post` table
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// The association of user to a users post
UsersPost.belongsTo(User, {
  foreignKey: 'user_id',
});

// Four models packaged and exported as an object to import them together and use their proper names
module.exports = { User, Post, Subject, UsersPost };