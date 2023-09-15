const User = require('./User');
const Post = require('./Post');
const Subject = require('./Subject');
const UsersPost = require('./UsersPost.js');

Post.hasOne(Subject, {
  foreignKey: 'subject_id',
  through: {
    model: Subject,
    unique: false,
  },
});

Subject.hasMany(Post, {
  foreignKey: 'subject_id',
});

Post.hasOne(User, {
  foreignKey: 'user_id',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
});

UsersPost.belongsTo(User, {
  foreignKey: 'user_id',
});

/*
Post.belongsToMany(User, {
  foreignKey: 'post_id',
  through: {
    model: UsersPost,
    unique: false,
  },
});
*/
/*
User.belongsToMany(Post, {
  foreignKey: 'user_id',
  through: {
    model: UsersPost,
    unique: false,
  },
});
*/
module.exports = { User, Post, Subject, UsersPost };
