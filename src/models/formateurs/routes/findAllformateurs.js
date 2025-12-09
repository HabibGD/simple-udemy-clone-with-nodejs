const Cour = require('../../cours/models/cours')
const Formateur = require('../models/formateur')



module.exports = (app) => {

    app.get('/api/udemy/formateurs', (req, res) => {

        Formateur.findAll({ include: Cour })
            .then((formateur) => {
                res.json({ message: 'All the Teachers on Udemy', data: formateur })
            })
            .catch(err => {
                res.json({ message: 'we found somes issues', error: err.message })
            })
    })
}