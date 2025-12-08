const Cour = require('../models/cours')


module.exports = (app) => {
    app.post('/api/udemy/cours', (req, res) => {
        
        Cour.create(req.body)
            .then((cour) => {
                res.json({ message: 'Cours added..', data: cour })
            })
            .catch(err => {
                res.json({ message: 'we found some issues', error: err.message })
            })
    })
}