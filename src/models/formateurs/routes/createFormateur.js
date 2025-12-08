const Formateur = require('../models/formateur')


module.exports = (app) => {
    app.post('/api/udemy/formateurs', (req, res) => {

        Formateur.create(req.body)
            .then((formateur) => {
                res.json({ message: 'Added successfully', data: formateur })
            })
            .catch(err => {
                res.json({ message: 'we found somes issues', error: err.message })
            })
    })
    
}