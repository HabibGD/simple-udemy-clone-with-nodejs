const Cour = require('../models/cours')
const Formateur = require('../../formateurs/models/formateur')


module.exports = (app) => {

    app.get('/api/udemy/cours/:id', (req, res) => {

        const id = req.params.id
        Cour.findByPk( id , { include:  Formateur })
            .then((cour) => {
                res.json({ message: 'Here is the cours...', data: cour })
            })
            .catch(err => {
                res.json({ message: 'error', error: err.message })
            })

    })
}