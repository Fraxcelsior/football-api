const { Router } = require('express')

const router = new Router()


router.post('/logins', function (req, res, next) {
    Team
        .create(req.body)
        if (!req.body) {
            res.status(400).send({
                message: 'Please supply a valid email and password'
              })
        } else res.send({
            jwt: toJWT({ userId: 1 })
          })
/*
        .then(team => { res.status(201).json(team) })
        .catch(error => next(error))
        */
})


module.exports = router