const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('./db')

router.get('/',(req,res)=>{
  res.render('index')
})
// CREATE
router.post('/', (req, res) => {
  const { name, email,password } = req.body;
  console.log(`inserting user with name:${name},email:${email},password:${password}`)
  const sql = `INSERT INTO users (name, email,password) VALUES (?, ?,?)`;
  connection.query(sql, [name, email,password], (err, result) => {
    if (err) throw err;
    console.log("user inserted successfully :",result)
    res.redirect('/users');
  });
});

// READ
router.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.render('users', { users: results });
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  connection.query(sql, [name, email, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM users WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
