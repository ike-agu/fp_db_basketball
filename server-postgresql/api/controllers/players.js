const express = require('express');
const router = express.Router();

const Player = require('../models/palyer')

// players index route
router.get('/', async (req, res) => {
    try {
        const players = await Player.all
        res.json({players})
    } catch(err) {
        res.status(500).json({err})
    }
})


module.exports = router;
