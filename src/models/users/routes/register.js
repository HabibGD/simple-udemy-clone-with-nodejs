const sequelize = require('sequelize')
const User = require('../models/user')


module.exports = (app) => {

    app.post('/api/udemy/register',  async (req, res) => {

        try {

            const user = await User.create(req.body)
            const message = 'User registered successfully'
            res.json({ message: message, data: user })

        } catch (error) {
            
            res.status(404).json({ message: error.message })
        }
    })
}