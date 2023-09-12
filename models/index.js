const User = require('./User');
const Post = require('./Post');
const Subject = require('./Subject');
const UsersPost = require('./UsersPost.js');

Post.hasOne(Subject, {
  foreignKey: 'subject_id',
});

Subject.hasMany(Post, {
  foreignKey: 'subject_id',
});

Post.hasOne(User, {
  foreignKey: 'User_id',
});

User.hasMany(Post, {
  foreignKey: 'User_id',
});

UsersPost.belongsTo(User, {
  foreignKey: 'User_id',
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
