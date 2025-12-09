const sequelize = require('../../../db/sequelize')
const { DataTypes } = require('sequelize')
const Formateur = require('../../formateurs/models/formateur')


const Cour = sequelize.define('Cour', {

    domaine: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg : 'Vous devez rremplir ce champ...' },
            notNull: { msg: 'Ce champ ne peux pas etre null' }
        }
    },
    
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg : 'Vous devez rremplir ce champ...' },
            notNull: { msg: 'Ce champ ne peux pas etre null' }
        }
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg : 'Vous devez rremplir ce champ...' },
            notNull: { msg: 'Ce champ ne peux pas etre null' }
        }
    },

    formation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: { msg : 'Vous devez rremplir ce champ...' },
            notNull: { msg: 'Ce champ ne peux pas etre null' },
            isInt: { msg: 'L\'ID doit etre un entier...' }
        }
    }

})


module.exports = Cour