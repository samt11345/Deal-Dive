const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const subjectRoutes = require('./subjectRoutes');

router.use('/subjects', subjectRoutes);

router.use('/users', userRoutes);

router.use('/posts', postRoutes);

module.exports = router;
