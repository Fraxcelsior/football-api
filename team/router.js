const { Router } = require('express')
const Team = require('./model')

const router = new Router()

router.get('/team', function (req, res, next) {
    Team
        .findAll()
        .then(teams => {
            res.status(201).json({ teams })
        })
        .catch(error => next(error))
})

router.post('/team', function (req, res) {
    Team
    .create(req.body)
    .then(team => {res.status(201).json(team)})
    .catch(error => next(error))
})

module.exports = router