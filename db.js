const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:passy@localhost:5432/postgres'

const sequelize = new Sequelize(databaseUrl, { define: { timestamps: false } })

sequelize.sync()
    .then(res => console.log("Database schema has been updated", res))
    .catch(error => console.log(error))

module.exports = sequelize