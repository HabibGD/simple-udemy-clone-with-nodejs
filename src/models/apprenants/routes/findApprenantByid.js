const Apprenant = require('../models/apprenant')
const Cour = require('../../cours/models/cours')
const auth = require('../../../auth/auth')


module.exports = (app) => {

    app.get('/api/udemy/apprenants/:id', auth,  (req, res) => {

        Apprenant.findByPk(req.params.id, { include: Cour })
            .then(apprenant => {
                if(apprenant === null){
                    const message = `L'apprenant avec l'ID ${req.params.id} n'existe pas...`
                    return res.status(404).json({ message })
                }
                res.json({ message: `Here is the student you looking for`, data: apprenant })
            })
            .catch(_ => {
                const message = 'Nous n\'avons pas pu trouver cet apprenant, veuillez reessayer plus tard...'
                res.status(500).json({ message })
            })
    })
}