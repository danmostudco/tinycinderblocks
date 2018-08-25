const express = require('express');
const router = express.Router();

// ROUTES
router.get('/hello', (req, res) => {
    res.send({express: 'Hello from the express route'})
});

module.exports = router;