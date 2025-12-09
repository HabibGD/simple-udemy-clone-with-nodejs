const { DataTypes } = require('sequelize')
const sequelize = require('../../../db/sequelize')




const Formateur = sequelize.define('Formateur', {

    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: {
        //     msg:  'Ce nom de formateur existe deja'
        // },
        validate: {

            isAlpha: { msg: 'veuillez saisir une chaine de caractere svp ...' },
            notEmpty: { msg: 'Ce champ ne peut pas etre vide' },
            notNull: { msg: 'Ce champ ne peux pas etre null' }
        }
        
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Ce champ ne peux pas etre vide...' },
            notNull: { msg: 'Ce champ ne peux pas etre null...' }
        }

    },
    age: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notNull: { msg: 'Vous devez saisir votre age' },
            isInt: { msg: 'Vous devez saisir un nombre entier sur le champ age...' },
            max: {
                args: [70],
                msg: 'Desole, votre age ne doit pas depasser 70 ans'
            },
            min: {
                args: [10],
                msg: 'Desole petit, tu est trop jeune pour utiliser cette plateforme...'
            }
        }
    }
})



module.exports = Formateur