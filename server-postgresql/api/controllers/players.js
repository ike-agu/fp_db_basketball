const express = require('express');
const router = express.Router();

const Player = require('../models/player')

// players index route
router.get('/', async (req, res) => {
    try {
        const players = await Player.all
        res.json({players})
    } catch(err) {
        res.status(500).json({err})
    }
})

// players show route
router.get('/:id', async(req, res) => {
  try{
    const player = await Player.findById(parseInt(req.params.id))
    res.json(player)
  } catch(err) {
    res.status(404).json({err})
  }
})

//create new player
router.post('/', async(req, res) =>{
  try{
    const player = await Player.create(req.body.name, req.body.age, reg.body.salary )
    res.json(player)
  } catch (err){
    res.status(404).json({err})
  }
});

// players update route
router.patch('/:id', async (req, res) => {
    try {
        const player = await  Player.findById(parseInt(req.params.id))
        const updatedPlayer = await player.update(req.body.name, req.body.age,req.body.salary )
        res.json({player: updatedPlayer})
    } catch(err) {
        res.status(500).json({err})
    }
})

// delete player route
router.delete('/:id', async (req, res) => {
    try {
        const player = await Player.findById(parseInt(req.params.id))
        await player.destroy()
        res.status(204).json('Player deleted')
    } catch(err) {
        res.status(500).json({err})
    }
})



module.exports = router;
