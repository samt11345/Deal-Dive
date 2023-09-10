const router = require('express').Router();
const { Subject } = require('../../models');

// GET all items
router.get('/', (req, res) => {
  Subject.findAll()
    .then((subjects) => {
      res.json(subjects);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// GET a specific item by ID
router.get('/:id', (req, res) => {
  Subject.findByPk(req.params.id)
    .then((subjects) => {
      res.json(subjects);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// POST a new item
router.post('/', (req, res) => {
  const newSubject = req.body;
  Subject.create(newSubject)
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// PUT (update) an existing item by ID
router.put('/:id', (req, res) => {
  Subject.update(req.body, { where: { id: req.params.id } })
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
  Subject.destroy({ where: { id: req.params.id } })
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
