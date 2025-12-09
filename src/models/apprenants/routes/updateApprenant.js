const Apprenant = require('../models/apprenant')



module.exports = (app) => {

    app.put('/api/udemy/apprenants/:id', (req, res) => {

        const id = req.params.id
        Apprenant.update(req.body, {
            where: { id: id }
        })
        .then(_ => {
            Apprenant.findByPk(id)
                .then((apprenant) => {
                    if(apprenant === null)
                    {
                        const message = `L'apprenant avec ID '${req.params.id}' n'existe pas...`
                        return res.status(404).json({ message })
                    }
                    res.json({ message: `Apprenant \' ${apprenant.fullName} \' updated successfully`, data: apprenant })
                    })
                .catch(err => {
                    if(err instanceof ValidationError){
                        return res.status(400).json({ message: err.message, data: err })
                    }                    
                    const message = 'Nous avons rencontre une erreur lors de la modification de cet apprenant, veuillez reessayer plus tard...'
                    res.status(500).json({ message })
                })
        })
    })
}