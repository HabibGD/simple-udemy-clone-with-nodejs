const { ValidationError } = require('sequelize')
const Apprenant = require('../models/apprenant')
const auth = require('../../../auth/auth')



module.exports = (app) => {

    app.post('/api/udemy/apprenants', auth, async (req, res) => {

        try{

            const apprenants =  await Apprenant.create(req.body)
                
            res.json({ message: `Added successfully`, data: apprenant })
          
        }catch(err){
            if(err instanceof ValidationError){
                return res.status(400).json({ message: err.message, data: err })
            }
            const message = 'Impossible d\'ajouter ces informations merci de bien verifier la requete et reessayer..'
            res.status(500).json({ message })
        }
        
    })
}
