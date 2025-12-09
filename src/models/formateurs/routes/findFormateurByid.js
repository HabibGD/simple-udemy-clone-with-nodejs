const Formateur = require('../models/formateur')
const Cour = require('../../cours/models/cours')


module.exports = (app) => {

    app.get('/api/udemy/formateurs/:id', (req, res) => {

        Formateur.findByPk(req.params.id, { include: Cour })
            .then((formateur) => {
                res.json({ message: 'formateur selected', data: formateur })
            })
            .catch(err => {
                res.json({ message: 'error founded', error: err.message })
            })
    })
}