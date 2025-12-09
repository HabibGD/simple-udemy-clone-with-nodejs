const Apprenant = require('../models/apprenant')



module.exports = (app) => {

    app.post('/api/udemy/apprenants', (req, res) => {

        Apprenant.create(req.body)
            .then(apprenant => {
                res.json({ message: `Added successfully`, data: apprenant })
            })
            .catch(err => {
                res.json({ message: 'error', error: err.message })
            })
    })
}