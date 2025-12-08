const Cour = require('../models/cours')
const Formateur = require('../../formateurs/models/formateur')

module.exports = (app) => {

    app.get('/api/udemy/cours', (req, res) => {

        Cour.findAll({ include: Formateur })
            .then(cour => {
                res.json({ message: 'Voici toutes les formations', data: cour })
            })
            .catch(err => {
                res.json({ message: 'error', error: err.message })
            })
    })
    
}