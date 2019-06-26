const express = require('express')
const db = require('./db')
const model = require('./team/model')
const teamRouter = require('./team/router')


//this is the API server
const app = express()

app.use(teamRouter)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`API server is listening on port ${port}`))