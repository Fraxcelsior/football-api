const { Router } = require('express')
const { toJWT } = require('./wt')
const { toData } = require('./wt')
const router = new Router()


router.post('/logins', function (req, res, next) {
    if (!req.body) {
        res.status(400).send({
            message: 'Please supply a valid email and password'
        })
    } else res.send({
        jwt: toJWT({ userId: 1 })
    })
})

router.get('/secret-endpoint', (req, res) => {
    const auth = req.headers.authorization && req.headers.authorization.split(' ')
    if (auth && auth[0] === 'Bearer' && auth[1]) {
        try {
            const data = toData(auth[1])
            res.send({
                message: 'Thanks for visiting the secret endpoint.',
                data
            })
        }
        catch (error) {
            res.status(400).send({
                message: `Error ${error.name}: ${error.message}`,
            })
        }
    }
    else {
        res.status(401).send({
            message: 'Please supply some valid credentials'
        })
    }
})


module.exports = router