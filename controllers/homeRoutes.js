const router = require('express').Router();
const { Subject, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const allSubjects = await Subject.findAll({
      include: [
        // Find all subjects and the posts that would be designated to each subject
        {
          model: Post,
          attributes: [
            // id, date, price, title, location, contact, image, subject_id
            'date',
            'price',
            'title',
            'location',
            'contact',
            'image',
            'subject_id',
          ],
        },
      ],
    });

    const subjectResults = allSubjects.map((r) => r.get({ plain: true }));
    res.render('homepage', {
      subjectResults,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/logout', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('logout');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard'); // onece signed up can see dashbaord
    return;
  }
  res.render('signup');
});
// need new name for dashboard. Must do as well to other files vvvv
router.get('/subject', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try {
      const allSubjects = await Subject.findAll({
        include: [
          {
            model: Post,
            attributes: [
              'date',
              'price',
              'title',
              'location',
              'contact',
              'image',
              'subject_id',
            ],
          },
        ],
      });

      const subjects = allSubjects.map((r) => r.get({ plain: true }));

      res.render('dashboard', { subjects, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    console.log('Please login or sign up');
    res.redirect('/login');
  }
});

// Please check vvvvv

router.get('/dashboard', async (req, res) => {
  try {
    const postData = await Post.findAll();

    const usersposts = postData.map((r) => r.get({ plain: true }));

    console.log(usersposts);
    res.render('dashboard', {
      usersposts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
