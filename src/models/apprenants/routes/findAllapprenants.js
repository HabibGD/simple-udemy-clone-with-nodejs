const Apprenant = require('../models/apprenant')


module.exports = (app) => {

    app.get('/api/udemy/apprenants', (req, res) => {

        Apprenant.findAll()
            .then(apprenants => {
                res.json({ message: `Here are all the students`, data: apprenants })
            })
            .catch(err => {
                const message = 'Nous n\'avons pas pu trouver la listes des  apprenant, veuillez reessayer plus tard...'
                res.status(500).json({ message })
            })
    })
}



