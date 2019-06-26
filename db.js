const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:passy@localhost:5432/postgres'

const sequelize = new Sequelize(databaseUrl)

sequelize.sync()
    .then(() => console.log("Database schema has been updated"))
    .catch(console.error)

module.exports = sequelize