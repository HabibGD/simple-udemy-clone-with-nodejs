const Apprenant = require('../models/apprenant')


module.exports = (app) => {

    app.get('/api/udemy/apprenants', (req, res) => {

        Apprenant.findAll()
            .then(apprenants => {
                res.json({ message: `Here are all the students`, data: apprenants })
            })
            .catch(err => {
                res.json({ message: 'error', error: err.message })
            })
    })
}