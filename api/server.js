
const express = require('express')
const fortunes = require('./fortunes')
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>DEPLOYMENT</h1>')
})

server.get('/node-env', (req, res) => {
    res.send({NODE_ENV: process.env.NODE_ENV})
})

server.get('/fortunes', (req, res) => {
    let randomIndex = Math.floor(Math.random() *fortunes)
    res.send(`<h1> ${fortunes[randomIndex]} </h1>`)
})


module.exports = server