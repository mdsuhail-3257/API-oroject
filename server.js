// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple in-memory data storage
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// GET endpoint to fetch items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// POST endpoint to add a new item
app.post('/api/items', (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});