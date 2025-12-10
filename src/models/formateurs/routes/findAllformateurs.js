const Cour = require('../../cours/models/cours')
const Formateur = require('../models/formateur')
const { Op } = require('sequelize') // Ce ci est un Operateur Sequelize



module.exports = (app) => {

    app.get('/api/udemy/formateurs', (req, res) => {

        if(req.query.fullName){
            // Endpoint de recherche des
            const fullName = req.query.fullName
            // On utilise la methode ParseInt() parceque 

            const limitValue = parseInt(req.query.limit) || 3

            if(fullName.length < 3){
                const message = 'vous devez saisir au moins trois caracteres..'
                return res.status(400).json({ message })
            }            
            return Formateur.findAndCountAll(
                    { 
                        where: 
                        { 
                            fullName: {
                                [Op.like]: `%${fullName}%`
                            } 
                        },
                        limit: limitValue,
                        order: ['fullName']
                    })
                    .then(({count, rows}) => {
                        const message = `Il y'a ${count} formateur avec le ${fullName}`
                        res.json({ message: message, data: rows })
                    })
                    .catch(err => {
                        const message = 'Impossible de trouver ces information, veuillez reessayer plus tard...'
                        res.status(500).json({ message })
                    })
        }

        Formateur.findAll({ include: Cour, order: ['fullName'] })
            .then((formateur) => {
                res.json({ message: 'All the Teachers on Udemy', data: formateur })
            })
            .catch(err => {
                const message = 'Nous avons rencontre des probleme, merci de reesayer plus tard'
                res.status(500).json({ message })
            }) 
    })
}