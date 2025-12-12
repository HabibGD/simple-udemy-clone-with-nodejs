const { DataTypes } = require('sequelize')
const sequelize = require('../../../db/sequelize')
const bcrypt = require('bcrypt')




const User = sequelize.define('User', {

    username: {
        type: DataTypes.STRING,
        unique: { msg: 'ce nom d\'utilisateur existe deja..' },
        validate: {
            notEmpty: { msg: 'Ce champ ne peux pa etre vide' }
        }

    },
    
    password: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: { msg: 'Ce champ ne peux pa etre vide' }
        }
    }
    },
    {
        hooks: {
            async beforeCreate(user){
                const salt = await bcrypt.genSalt(10)
                user.password =  await bcrypt.hash(user.password, salt)
            },

            async beforeUpdate(user){
                if(user.changed('password')){
                    const salt = await bcrypt.genSalt(10)
                    user.password = await bcrypt.hash(user.password, salt)
                }
                    
            }


        }
    }
)


module.exports = User