const Apprenant = require('../models/apprenant')
const Cour = require('../../cours/models/cours')


module.exports = (app) => {

    app.get('/api/udemy/apprenants/:id', (req, res) => {

        Apprenant.findByPk(req.params.id, { include: Cour })
            .then(apprenant => {
                res.json({ message: `Here is the student you looking for`, data: apprenant })
            })
            .catch(err => {
                res.json({ message: 'error', error: err.message })
            })
    })
}