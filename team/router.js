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

module.exports = router