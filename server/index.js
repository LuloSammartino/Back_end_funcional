const express = require('express')
const server = express()
//const cors = require('cors')

const string = 'back end'

server.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');

    next()
})

server.get('/', (req, res) => {
    res.send(string)
    
})



server.listen(3001, () => {
   console.log('servidor corriendo en puerto 3001' )})