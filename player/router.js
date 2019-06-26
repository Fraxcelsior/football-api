const { Router } = require('express')
const Player = require('./model')

const router = new Router()

router.get('/player/', function (req, res, next) {
    Player
        .findAll()
        .then(players => {
            res.status(201).json({ players })
        })
        .catch(error => next(error))
})

router.get('/player/:id', function (req, res, next) {
    const id = req.params.id
    Player
        .findByPk(id)
        .then(player => res.status(200).json(player))
        .catch(error => next(error))
})

router.post('/player', function (req, res, next) {
    Player
        .create(req.body)
        .then(player => { res.status(201).json(player) })
        .catch(error => next(error))
})

router.put('/player/:id', function (req, res, next) {
    const id = req.params.id
    Player
        .findByPk(id)
        .then(player => {
            player.update(req.body)
        })
        .then(player => res.status(201).json(player))
        .catch(error => next(error))
})


module.exports = router