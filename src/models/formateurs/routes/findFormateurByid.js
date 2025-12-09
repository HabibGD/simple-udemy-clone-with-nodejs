const Formateur = require('../models/formateur')
const Cour = require('../../cours/models/cours')


module.exports = (app) => {

    app.get('/api/udemy/formateurs/:id', (req, res) => {

        Formateur.findByPk(req.params.id, { include: Cour })
            .then((formateur) => {
                if(formateur === null){
                    const message = `Le formateur avec ID: ${req.params.id} n'existe pas!`
                    return res.json({ message })
                }
                res.json({ message: 'formateur selected', data: formateur })
            })
            .catch(err => {
                const message = 'Nous avons rencontre des probleme, merci de reesayer plus tard'
                res.status(500).json({ message })
            })             
    })
}