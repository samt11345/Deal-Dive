const router = require('express').Router();

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

module.exports = router;
