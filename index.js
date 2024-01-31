const express = require('express');

const app = express();

const config = {
    host: "dbt",
    user: "root",
    password: "root",
    database: "nodetest"
}

const mysql = require('mysql');
const conn = mysql.createConnection(config)



app.get('/', (req, res) => {
    const sql = `INSERT INTO people(name) values ('Wesley')`
    conn.query(sql)
 
    res.send('<h1>Full Cycle Rocks!</h1>')
})
 
app.get('/list', (req, res) => {
    const sql = `SELECT name FROM people `

    conn.query(sql, (error, rows) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.json(rows);
        }
    });


 
})

app.listen(3000, () => {
    console.log('running on port 3000')
})