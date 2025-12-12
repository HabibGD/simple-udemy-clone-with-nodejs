const User = require('../models/user')
const app = require('../../../../app')
const sequelize = require('../../../db/sequelize')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const privateKey = require('../../../auth/private_key')


module.exports = (app) => {

    app.post('/api/udemy/login',  async (req, res) => {

        try
        {

            const user = await User.findOne({ where: { username: req.body.username } })

            if(!user){
                const message = 'l\'utilisateur demande n\'existe pas...'
                return res.status(404).json({ message: message })
            }

            const passwordValid = await bcrypt.compare(req.body.password, user.password)
            if(!passwordValid){
                const message = 'Password incorrect!'
                return res.status(401).json({ message: message })
            }

            const token = jwt.sign(
                { userId: user.id },
                privateKey,
                { expiresIn: '24h' }
            )

            const message = 'User connected....'
            res.json({ message: message, data: user, token })

        }

        catch(error){
            res.status(500).json({ message: error.message })
        }  

    })}


    /* 

        Un jeton JWT est compose de :

            - Information de l'utilisateur
            - Une clef secrete
            - Une duree de validitee

    */