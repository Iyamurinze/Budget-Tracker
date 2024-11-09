const { dbs } = require('../app');
// Example query
dbs.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
        console.error(err);
        res.status(440).send('Error in query');
    } else {
        res.json(results);
    }
});
