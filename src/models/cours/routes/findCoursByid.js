const Cour = require('../models/cours')
const Formateur = require('../../formateurs/models/formateur')
const Apprenant = require('../../apprenants/models/apprenant')


module.exports = (app) => {

    app.get('/api/udemy/cours/:id', (req, res) => {

        const id = req.params.id
        Cour.findByPk( id , { include:  Formateur, Apprenant })
            .then((cour) => {
                if(cour === null){
                    const message = `Il n'existe pas de cour avec l'ID ${req.params.id}`
                    return res.status(404).json({ message })
                }
                res.json({ message: 'Here is the cours...', data: cour })
            })
            .catch(err => {
                const message = 'Nous avons rencontre une erreur , veuillez reessayer plus tard...'
                res.status(500).json({ message })
            })           
    })
}