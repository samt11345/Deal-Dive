const router = require('express').Router();
const { User, Subject, Post, UsersPost } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const allSubjects = await Subject.findAll({
            include: [ //Find all subjects and the posts that would be designated to each subject
                {
                    model: Post, //need fix
                    attributes: [ //need fix
                        'name',
                        'title',
                        'date',
                        'description'
                    ],
                },
            ],
        })

        const results = allSubjects.map((r) => r.get({ plain: true }));
        res.render('homepage', {
            allSubjects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

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
      })
      
      
      router.get('/signup', (req, res) => {
        if (req.session.logged_in) {
          res.redirect('/dashboard'); //onece signed up can see dashbaord
          return;
        }
        res.render('signup');
      })
            //need new name for dashboard. Must do as well to other files vvvv
      router.get('/subject', withAuth, async (req, res) => {
        if (req.session.logged_in) {
          try {
      
            const allSubjects = await Subject.findAll({
              include: [
                {
                  model: Post,
                  attributes: [ //need fix
                    'id',
                    'title',
                    'date',
                    'name',
                    'description',
                  ],
                },
              ],
            });

            const subjects = allSubjects.map((r) => r.get({ plain: true }))

            res.render('dashboard', { dashboard, loggedIn: req.session.loggedIn });
            return;
          } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
        }
        else {
          console.log("Please login")
          res.redirect('/login');
        }
      })

      // Please check vvvvv

      router.get('/dashboard', async (req, res) => {
        try {
          const postData = await Post.findAll();
      
          const usersposts = postData.map((r) => r.get({ plain: true }));
      
      
          console.log(usersposts)
          res.render('dashboard', {
            usersposts,
            logged_in: req.session.logged_in,
          });
        } catch (err) {
          res.status(500).json(err);
        }
      })
      

    module.exports = router;
