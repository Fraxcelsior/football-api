const express = require('express')
const db = require('./db')
const teamModel = require('./team/model')
const playerModel = require('./player/model')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const bodyParser = require('body-parser')


//this is the API server
const app = express()
const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`API server is listening on port ${port}`))