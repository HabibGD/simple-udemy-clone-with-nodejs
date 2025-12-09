const Cour = require('../models/cours')


module.exports = (app) => {
    app.post('/api/udemy/cours', (req, res) => {
        
        Cour.create(req.body)
            .then((cour) => {
                res.json({ message: 'Cours added..', data: cour })
            })
            .catch(err => {
                const message = 'Nous avons rencontre une erreur lors de l\'ajout de cette formation, veuillez reessayer plus tard...'
                res.status(500).json({ message })
            })
    })
}