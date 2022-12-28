// @desciption: Server index file. Holds backend API logic

// Imports
const express = require('express');
const pool = require('./db.js');

// Express object and port instance
const app = express();
app.use(express.json());
app.listen(3001);

// bcrypt encryption function
const bcrypt = require('bcrypt');
async function hashPassword(password) {
    // Generate a salt for the password
    const salt = await bcrypt.genSalt();

    // Hash the password with the salt
    const hash = await bcrypt.hash(password, salt);

    return hash;
}

// + ------------------------------- +
// +           USER ROUTES           +
// + ------------------------------- +

// USER CREATE
app.post("/api/user/create", async (req, res) => {
    try {
        const { user_id, user_name, email, phone_number, first_name, last_name, gender, password } = req.body;

        const newUser = await pool.query("INSERT INTO user_accounts VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [user_id, user_name, email, phone_number, first_name, last_name, gender, password]
        );

        res.json(newUser);
    } catch (err) {
        console.error(err);
    }
});

// USER READ
app.get('/api/user/:id', async (req, res) => {
    try {
        const readUser = await pool.query("SELECT * FROM user_accounts WHERE user_name = $1",
            [req.params.id]
        );

        res.json(readUser);
    } catch (err) {
        console.log(err);
    }
});

// USER UPDATE
app.put("/api/user/update", async (req, res) => {
    try {
        const { user_id, user_name, email, phone_number, first_name, last_name, gender, password } = req.body;

        const newUser = await pool.query("INSERT INTO user_accounts VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [user_id, user_name, email, phone_number, first_name, last_name, gender, password]
        );

        res.json(newUser);
    } catch (err) {
        console.error(err);
    }
});

// USER DELETE
app.delete('/api/user/delete/:id', async (req, res) => {
    try {
        const readUser = await pool.query("DELETE FROM user_accounts WHERE user_name = $1",
            [req.params.id]
        );

        res.json(readUser);
    } catch (err) {
        console.log(err);
    }
});

// + ------------------------------- +
// +           POST ROUTES           +
// + ------------------------------- +



// + ------------------------------- +
// +           BLOB ROUTES           +
// + ------------------------------- +
