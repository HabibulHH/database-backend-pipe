const express = require("express");
const router = express.Router();
const db = require('../');

router.get("/all-student",(req,res)=>{
    res.send("all data");
})

router.get('/', (req, res) => {
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
router.get('/student', (req, res) => {

    db.query('SELECT * FROM person LIMIT 1', (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result.rows);
        }
    });
});

module.exports = router;