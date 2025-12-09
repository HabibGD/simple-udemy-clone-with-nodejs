const { DataTypes } = require('sequelize')
const sequelize = require('../../../db/sequelize')


const Apprenant = sequelize.define('Apprenant', {

    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Apprenant