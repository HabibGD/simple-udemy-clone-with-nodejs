const Cour = require('../models/cours')
const Formateur = require('../../formateurs/models/formateur')
const { Op } = require('sequelize')

module.exports = (app) => {

    app.get('/api/udemy/cours', (req, res) => {

        if(req.query.title){

            const title = req.query.title

            const limitValue = parseInt(req.query.limit) || 5

            if(title.length <3 ){
                return res.json({ message: 'vous devez saisir au moins 3 caracteres' })
            }

            return Cour.findAndCountAll({
                where: {
                    title: {
                        [Op.like]: `%${title}%`
                    }
                },
                limit: limitValue,
                order: ['title']
            })
            .then(({ count, rows }) => {

                const message = `Il y'a '${count}' cour(s) qui correspond a votre echerche... `
                res.json({ message, data: rows })
            })
            .catch(_ => {
                const message = 'Nous avons rencontre des erreurs, veuillez reessayer plus tard...'
                res.status(500).json({ message })
            })
        }

        Cour.findAll({ include: Formateur })
            .then(cour => {
                res.json({ message: 'Voici toutes les formations', data: cour })
            })
            .catch(err => {
                const message = 'Nous avons rencontre une erreur , veuillez reessayer plus tard...'
                res.status(500).json({ message })
            })
    })
    
}