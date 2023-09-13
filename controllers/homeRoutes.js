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
  // if (!req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('login');
});

router.get('/logout', (req, res) => {
  // if (!req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('logout');
});

router.get('/signup', (req, res) => {
  // if (!req.session.logged_in) {
  //   res.redirect('/login'); // once signed up can see dashboard
  //   return;
  // }
  res.render('signup');
});

// need new name for dashboard. Must do as well to other files vvvv
router.get('/dashboard', withAuth, async (req, res) => {
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

// GET one subject

router.get('/dashboard/:id', async (req, res) => {
  try {
    const subjectSection = await Subject.findByPk(req.params.id, {
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

    const chosenSubject = subjectSection.get({ plain: true });
    res.render('subject', { chosenSubject });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET single post

router.get('/post/:id', async (req, res) => {
  try {
    const postSelection = await Post.findByPk(req.params.id);
    const post = postSelection.get({ plain: true });
    res.render('post', { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/sellitem', async (req, res) => {
  const signupData = await Post.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  });
  if (!signupData) {
    return res.json({ message: 'this is is not a valid sign up' });
  }
});

// Come back to this  VVVVV
router.get('/sellitem', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    try {
      const singleItem = await Post.create({
        date: req.body.date,
        price: req.body.price,
        title: req.body.title,
        location: req.body.location,
        contact: req.body.contact,
        image: req.body.image,
        subject_id: req.body.subject_id,
      });

      const sellitem = singleItem.map((r) => r.get({ plain: true }));

      res.redirect('/sellitem', { sellitem, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    console.log('Please login');
    res.redirect('/login');
  }
});

module.exports = router;
