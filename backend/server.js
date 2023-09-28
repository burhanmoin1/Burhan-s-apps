// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Burhans Apps Express backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
