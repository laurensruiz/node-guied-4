
const express = require('express')
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>DEPLOYMENT</h1>')
})

server.get('/node-env', (req, res) => {
    res.send({NODE_ENV: process.env.NODE_ENV})
})


module.exports = server