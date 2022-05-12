
const express = require('express')
//const fortunes = require('./fortunes')
const server = express();
const Stuff = require('./stuff-model')

server.get('/', (req, res) => {
    res.send('<h1>DEPLOYMENT</h1>')
})

server.get('/stuff', (req, res) => {
    Stuff.getAll()
    .then(result => {
        res.json(result)
    })
})

server.get('/stuff/:index', (req, res) => {
    Stuff.getByIndex(req.params.index)
    .then(result => {
        if(!result){
            res.status(404).json({
                message: "blah"
            })
        } else {
            res.json(result)
        }
    })
})
server.post('/stuff', (req, res) => {
    Stuff.add(req.params.object)
    .then(stuff => {
        res.json(stuff)
    })
})

// server.get('/fortunes', (req, res) => {
//     let randomIndex = Math.floor(Math.random() *fortunes)
//     res.send(`<h1> ${fortunes[randomIndex]} </h1>`)
// })


module.exports = server