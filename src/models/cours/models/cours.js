const sequelize = require('../../../db/sequelize')
const { DataTypes } = require('sequelize')
const Formateur = require('../../formateurs/models/formateur')


const Cour = sequelize.define('Cour', {

    domaine: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    formation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})


module.exports = Cour