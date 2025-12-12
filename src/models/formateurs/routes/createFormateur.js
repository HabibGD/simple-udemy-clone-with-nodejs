const { ValidationError, UniqueConstraintError } = require('sequelize')
const Formateur = require('../models/formateur')
const auth = require('../../../auth/auth')


module.exports = (app) => {
    app.post('/api/udemy/formateurs',  auth, async (req, res) => {
        try{
            const formateur = await    Formateur.create(req.body)
            res.json({ message: 'Added successfully', data: formateur })
        }
        catch(err){
           if(err instanceof ValidationError){
                return res.status(400).json({ message: err.message, data: err })
            }
                
            const message = 'Nous avons rencontre des probleme, merci de reesayer plus tard'
                res.status(500).json({ message })
        }

            
            
           
                
                // il faut reecrer la table dans certain cas pour que sequelize puisse 
                // utiliser la contrainte unique 
                // if(err instanceof UniqueConstraintError){
                //     return res.status(400).json({ message: err.message, data: err })
                // }
    })
    
}