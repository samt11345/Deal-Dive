const express = require('express');
const path = require('path');
const api = require('./routes/index.js');


const express = require('express');

const app = express();

// Sample data (for demonstration purposes)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

app.use(express.json());

// GET all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// GET a specific item by ID
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (!item) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    res.json(item);
  }
});

// POST a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) an existing item by ID
app.put('/api/items/:id', (req, res) => {
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
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    items.splice(index, 1);
    res.json({ message: 'Item deleted' });
  }
});

module.exports = app;


