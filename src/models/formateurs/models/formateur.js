const { DataTypes } = require('sequelize')
const sequelize = require('../../../db/sequelize')


const Formateur = sequelize.define('Formateur', {

    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
    
})



module.exports = Formateur