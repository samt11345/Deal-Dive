const router = require('express').Router();
const { Post } = require('../../models');

// GET all items
router.get('/', (req, res) => {
  Post.findAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// GET a specific item by ID
router.get('/:id', (req, res) => {
  Post.findByPk(req.params.id)
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// POST a new item
router.post('/', (req, res) => {
  const newPost = {
      ...req.body,
      user_id: req.session.user_id
  };
  Post.create(newPost)
      .then((results) => {
          res.redirect('/dashboard');
          // res.status(201).json(results);
      })
      .catch((err) => {
          console.log(err);
          res.json(err);
      });
});

// PUT (update) an existing item by ID
router.put('/:id', (req, res) => {
  Post.update(req.body, { where: { id: req.params.id } })
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// DELETE an item by ID
router.delete('/:id', (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get('/filter/:subjectId', async (req, res) => {
  try {
    const { subjectId } = req.params;
    const posts = await Post.findAll({ where: { subject_id: subjectId } });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
