const User = require('./User');
const Post = require('./Post');
const Subject = require('./subject');
const UsersPost = require('./UsersPost.js');

Post.belongsToMany(Subject, {
    foreignKey: 'subject_id'
});

Subject.hasMany(Post, {
    foreignKey: 'subject_id'
});

Post.belongsToMany(User, {
    foreignKey: 'post_id',
    through: {
        model: UsersPost,
        unique: false
    }
})
User.belongsToMany(Post, {
    foreignKey: 'user_id',
    through: {
        model: UsersPost,
        unique: false
    }
})



module.exports = { User, Post, Subject, PostSubjectUser };