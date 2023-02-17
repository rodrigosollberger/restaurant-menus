const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const { sequelize } = require('../db')

sequelize.sync({force: true})

module.exports = { Restaurant, Menu }
