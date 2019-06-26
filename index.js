const express = require('express')

//this is the API server
const app = express()

const port = 4000

app.listen(port, () => `API server is listening on port ${port}`)