const http = require('http');
const express = require('express');

// Import required modules

// Create a server


// serve static files
const app = express();
app.use(express.static('public'));

// serve index.html 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/views/test.html');
});

// Start the server
const port = 7777;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});