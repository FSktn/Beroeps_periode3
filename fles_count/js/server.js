const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});



