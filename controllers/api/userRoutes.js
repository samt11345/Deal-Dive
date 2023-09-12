const router = require('express').Router();

const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

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
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/signup', async (req, res) => {
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

//------------------------------------------------------------------------------------------
/*
// Sample data (for demonstration purposes)
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// GET all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET a specific item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((it) => it.id === id);
  if (!item) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    res.json(item);
  }
});

// POST a new item
router.post('/', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) an existing item by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    items[index] = { ...items[index], ...updatedItem };
    res.json(items[index]);
  }
});

// DELETE an item by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    items.splice(index, 1);
    res.json({ message: 'Item deleted' });
  }
});

*/

module.exports = router;
