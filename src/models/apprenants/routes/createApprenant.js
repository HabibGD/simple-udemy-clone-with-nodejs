const { ValidationError } = require('sequelize')
const Apprenant = require('../models/apprenant')



module.exports = (app) => {

    app.post('/api/udemy/apprenants', (req, res) => {

        Apprenant.create(req.body)
            .then(apprenant => {
                res.json({ message: `Added successfully`, data: apprenant })
            })
            .catch((err) => {
                if(err instanceof ValidationError){
                    return res.status(400).json({ message: err.message, data: err })
                }
                const message = 'Impossible d\'ajouter ces informations merci de bien verifier la requete et reessayer..'
                res.status(500).json({ message })
            })
    })
}
