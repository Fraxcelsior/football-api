const express = require('express')
const database = require('./db')

//this is the API server
const app = express()

database

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`API server is listening on port ${port}`))