const { DataTypes } = require('sequelize')
const sequelize = require('../../../db/sequelize')


const Apprenant = sequelize.define('Apprenant', {

    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Vous devez remplir ce champ...' },
            notNull: { msg: 'Vous devez remplir ce champ' },
            isAlpha: { msg: 'Ce champ ne peux prendre des entiers...'}
        }
    },
    age:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Vous devez remplir ce champ...' },
            notNull: { msg: 'Vous devez remplir ce champ' },
            isInt: { msg: 'Ce champ doit etre un entier'}
        }
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Vous devez remplir ce champ...' },
            notNull: { msg: 'Vous devez remplir ce champ' },
            isAlpha: { msg: 'Ce champ ne peux pas prendre des entiers...'}
        }
    }
})







module.exports = Apprenant