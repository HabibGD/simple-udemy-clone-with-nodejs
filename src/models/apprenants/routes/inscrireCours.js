const Apprenant = require('../models/apprenant')
const Cour = require('../../cours/models/cours')



module.exports = (app) => {

    app.post('/api/udemy/cours/:id/inscrire',  async (req, res) => {

        const { apprenantId } = req.body
        try {

            const cours = await Cour.findByPk(req.params.id)
            const apprenant = await Apprenant.findByPk(apprenantId)

            if(!cours || !apprenant) {
                return res.status(404).json({ message: 'cours ou apprenant introuvable'})
            }
            
            await cours.addApprenant(apprenant)
            res.json({ message: 'Inscription reuissi...'})
        }
        catch(error) {
            res.status(500).json({ error: error.message })
        }
    })
}