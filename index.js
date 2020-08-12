const express = require('express')
const bodyParser = require('body-parser')
const router = require('./controllers/router')
const cors = require('cors')
const server = express()
const PORT = 3000

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))
server.use(router)

const conection = server.listen(PORT, console.log('running'))
conection.timeout = 300000