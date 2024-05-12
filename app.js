const express = require('express');
const db = require('./db'); // Import the database connection
const student = require('./student')
const app = express();

app.use('/api',student);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
