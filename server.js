require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Route to return a plain text message
app.get('/', (req, res) => {
    res.send('konichiwa ohayo gozaimazu');
});

// Route to return a JSON message
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello, this is a JSON response!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});