const Cour = require('../models/cours')
const Formateur = require('../../formateurs/models/formateur')




module.exports = (app) => {

    app.put('/api/udemy/cours/:id', (req, res) => {

        const id = req.params.id
        Cour.update(req.body, {
            where: { id: id }
        })
        .then(_ => {
            Cour.findByPk(id)
                .then(cour => {
                    if(cour === null){
                        const message = `Il n'existe pas de cour avec l'ID ${req.params.id}`
                        return res.status(404).json({ message })
                    }
                    res.json({ message: 'Cour updated successfully', data: cour })
                })
        })
        .catch(err => {
            if(err instanceof ValidationError){
                res.status(400).json({ message: err.message, data: err })
            }            
            const message = 'Nous avons rencontre une erreur , veuillez reessayer plus tard...'
            res.status(500).json({ message })
        })        
    })
}