const express = require('express');
const cors = require('cors');

const server  = express();
server.use(cors());
server.use(express.json());

const userRoutes = require('./controllers/users')
const playerRoutes = require('./controllers/players')
const teamRoutes =require('./controllers/teams')

server.use('/users', userRoutes)
server.use('/players' , playerRoutes)
server.use('/teams', teamRoutes)

//  const port = process.env.PORT || 5000;

//root route
server.get("/", (req, res) => res.send("Welcome to ikenna's basketball server "))

module.exports = server;
