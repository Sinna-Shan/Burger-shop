const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => { 
    res.json({
        code: 200,
        message: 'Welcome to the Shop Software API',
    });
})

module.exports = app;