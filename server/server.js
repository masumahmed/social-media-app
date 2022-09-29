const express = require('express');
const app = express();
app.listen(3000);

app.get('/', (req, res) => {
    res.send("Home");
})

// GET
app.get('/u/:userId/', (req, res) => {
    res.send(req.params.userId);
})
