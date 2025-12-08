const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'udemy',
    'root',
    '',
    {
        host: 'localhost',
        port: 3307,
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT+2'
        },
        logging: false

    }
)

module.exports = sequelize