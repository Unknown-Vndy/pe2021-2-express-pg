const express = require('express');

const app = express();

app.use(express.json());

app.get('/phones');

app.post('/users');
app.patch('/users/:userId');
app.delete('/users/:userId');
app.get('/users/:userId/phones');

app.use((err, req, res, next) => {});

module.exports = app;
