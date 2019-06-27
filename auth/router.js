const { Router } = require('express')
const { toJWT } = require('./wt')
const { toData } = require('./wt')
const router = new Router()


router.post('/logins', function (req, res, next) {
    const emails = req.body.emails
    const password = req.body.password

    if (!emails || !password) {
        res.status(400).send({
            message: 'Please supply a valid email and password'
        })
    }
    else {
        //1. find user based on email, 'entity' is callback from promis
        User
            .findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(entity => {
                if (!entity) {
                    res.status(400).send({
                        message: 'User with that email does not exist'
                    })
                }
                //2. use bcrypt.compareSync to check pw against stored hash
                if (bcrypt.compareSync(req.body.password, entity.password)) {
                    //3. if pw is correct, return JWT with userId of user (user.id)
                    releaseEvents.send({
                        jwt: toJWT({ userId: entity.id })
                    })
                }
                else {
                    res.status(400).send({
                        message: 'Password was incorrect'
                    })
                }
            })
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Oops! Something went wrong'
                })
            })
        //to implement steps 1-3, we used Sequelize and promise chaining^
    }
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
    else
        res.status(401).send({
            message: 'Please supply some valid credentials'
        })
})


module.exports = router