const { Router } = require('express')
const User = require('./model')

const router = new Router()

router.post('/player/', function (req, res, next) {
    User
        .create(req.body)
        .then(user => { res.status(201).send(user) })
        .catch(error => next(error))
})
