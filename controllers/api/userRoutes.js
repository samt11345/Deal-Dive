const router = require('express').Router();

const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const data = await User.findAll();
    res.status(200).json(data);
  } catch (err) {
    if (err) throw err;
    res.status(500).json(err);
  }
});

// Login area

router.post('/login', async (req, res) => {
  try {
    // Value finds user in User model by specific email
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If no user eamil then send message
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    // If no user password then send message
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Send message and have logged_in equla true
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // This ends the session the user has causing log out
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/signup', async (req, res) => {
  // Creates data for user info
  const signupData = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  });
  if (!signupData) {
    return res.json({ message: 'this is is not a valid sign up' });
  }

  req.session.save(() => {
    req.session.user_id = signupData.id;
    // req.session.logged_in = true;

    res.json({
      user: signupData,
      message: 'You successfully made an account. Try logging in!',
    });
  });
});

module.exports = router;
