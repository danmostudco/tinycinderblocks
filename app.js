const express = require('express');
const api = require('./routes/api');

// CREATE OUR INSTANCE
const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// HANDLE OUR ROUTES
app.use('/api', api);

module.exports = app;