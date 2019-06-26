const express = require('express')

//this is the API server
const app = express()

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`API server is listening on port ${port}`))