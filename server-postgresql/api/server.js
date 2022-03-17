const express = require('express');
const cors = require('cors');

const server  = express();
server.use(cors());
server.use(express.json());

const playerRoutes = require('./controllers/players')
server.use('/players' , playerRoutes)


 const port = process.env.PORT || 5000;

//root route
server.get("/", (req, res) => res.send("Hello World from Ike!"))

module.exports = server;
