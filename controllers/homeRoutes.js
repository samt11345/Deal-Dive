const router = require('express').Router();
const axios = require('axios');
const { Subject, Post } = require('../models');
const withAuth = require('../utils/auth');

const siteName = 'DealDive';
// Text for nav bar will match up to links
const navItems = [
  { text: 'Home', link: '/' },
  { text: 'Create a Listing', link: '/sellItem' },
  { text: 'Sign Up', link: '/signup' },
  { text: 'Sign In', link: '/login' },
];

async function getAllPosts() {
  return axios
    .get('http://localhost:3033/api/posts/')
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

async function getPost(id) {
  return axios
    .get(`http://localhost:3033/api/posts/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
async function filterPosts(id) {
  return axios
    .get(`http://localhost:3033/api/posts/filter/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

router.get('/', async (req, res) => {
  try {
    const allSubjects = await Subject.findAll({
      // Transfers all Post model info to display info
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

    const subjectResults = allSubjects.map((r) => r.get({ plain: true }));
    const allPosts = await Post.findAll();
    const allPostResults = allPosts.map(r => r.dataValues);

    res.render('homepage', {
      // Have these variables ready for rendering homepage
      subjectResults,
      logged_in: req.session.logged_in,
      siteName,
      navItems,
      categories: subjectResults.map(item => ({ id: item.id, name: item.subject_name })),
      featuredItems: allPostResults,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/filter/:id', async (req, res) => {
  // For indivual item listings
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

    const subjectResults = allSubjects.map((r) => r.get({ plain: true }));
    const filteredPosts = await Post.findAll({ where: { subject_id: req.params.id } });
    const filteredPostResults = filteredPosts.map(r => r.dataValues);

    res.render('homepage', {
      subjectResults,
      logged_in: req.session.logged_in,
      siteName,
      navItems,
      categories: subjectResults.map(item => ({ id: item.id, name: item.subject_name })),
      featuredItems: filteredPostResults
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login', {
    siteName,
    navItems,
  });
});

router.get('/logout', (req, res) => {
  // Can't logout if you haven't logged in
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('logout', {
    siteName,
    navItems,
  });
});

router.get('/signup', (req, res) => {
  res.render('signup', {
    siteName,
    navItems,
  });
});

router.get('/dashboard', withAuth, async (req, res) => {
  // uses withAuth function from Auth to verify login
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

      // List of all subjects. Each subject needing Post data
      const subjects = allSubjects.map((r) => r.get({ plain: true }));
      const postData = await Post.findAll();
      const usersposts = postData.map((r) => r.get({ plain: true }));
      res.render('dashboard', {
        subjects,
        usersposts,
        loggedIn: req.session.loggedIn,
        siteName,
        navItems,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    console.log('Please login or sign up');
    res.redirect('/login');
  }
});

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
    res.render('subject', {
      chosenSubject,
      siteName,
      navItems,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET single post
router.get('/post/:id', async (req, res) => {
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

  const subjectResults = allSubjects.map((r) => r.get({ plain: true }));
  try {
    const postSelection = await Post.findByPk(req.params.id);
    const post = postSelection.get({ plain: true });

    // This is section specific items, know the data by id and then bring to inspect page
    const subjectName = subjectResults.find(i => i.id === post.subject_id) ? subjectResults.find(i => i.id === post.subject_id).subject_name : "Other";
    res.render('Inspect', {
      post,
      siteName,
      navItems,
      product: {
        ...post,
        subject_id: subjectName,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/sellitem', async (req, res) => {
  try {
    // Once form is filled out the item will create post on dashboard (homepage)
    await Post.create(req.body);
    res.redirect('/dashboard');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/sellItem', withAuth, async (req, res) => {
  if (req.session.logged_in) {
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

    const subjectResults = allSubjects.map((r) => r.get({ plain: true }));
    res.render('sellItem', {
      loggedIn: req.session.loggedIn,
      siteName,
      navItems,
      categories: subjectResults.map((item) => ({
        id: item.id,
        name: item.subject_name,
      })),
    });
  } else {
    console.log('Please login');
    res.redirect('/login');
  }
});

module.exports = router;
