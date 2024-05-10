const express = require('express');
const db = require('./db'); // Import the database connection

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Example query
    db.query('SELECT NOW()', (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Current time: ' + result.rows[0].now);
        }
    });
});
app.get('/student', (req, res) => {

    db.query('SELECT * FROM person LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result.rows);
        }
    });
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
