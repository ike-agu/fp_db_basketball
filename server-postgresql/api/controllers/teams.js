const express = require('express')
const router = express.Router();

const Team = require('../models/team')

//teams show route
router.get('/:id',async (req, res ) => {
  try{
    const team = await Team.findById(parseInt(req.params.id))
    res.json(team)
  }catch (err){
    res.status(400).send({err})
  }
});

// teams players route
router.get('/:id/basketBallPlayers', async (reg, res) => {
  try{
    const team = await Team.findById(parseInt(req.params.id))
    console.log(team)
    const players = await team.basketBallPlayers
    console.log(players)
    res.json(players)
  } catch (err) {
    res.status(404).send({err})
  }
})


module.exports =router;
