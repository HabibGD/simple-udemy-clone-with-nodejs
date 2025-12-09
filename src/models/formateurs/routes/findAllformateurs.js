const Cour = require('../../cours/models/cours')
const Formateur = require('../models/formateur')



module.exports = (app) => {

    app.get('/api/udemy/formateurs', (req, res) => {

        if(req.query.fullName){
            // Endpoint de recherche 
            
            const fullName = req.query.fullName
            return Formateur.findAll({ fullName: fullName })
                    .then(formateur => {
                        const message = `Voici les formateur avec le nom ${formateur.fullName}`
                        res.json({ message, data: formateur })
                    })
        }

        Formateur.findAll({ include: Cour })
            .then((formateur) => {
                res.json({ message: 'All the Teachers on Udemy', data: formateur })
            })
            .catch(err => {
                const message = 'Nous avons rencontre des probleme, merci de reesayer plus tard'
                res.status(500).json({ message })
            }) 
    })
}