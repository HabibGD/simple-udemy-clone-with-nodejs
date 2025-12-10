const { Op } = require('sequelize')
const Apprenant = require('../models/apprenant')


module.exports = (app) => {

    app.get('/api/udemy/apprenants', (req, res) => {

        if(req.query.fullName){
            const fullName = req.query.fullName
            const limitValue = parseInt(req.query.limit) || 3
            if(fullName.length < 3){
                const message = 'vous devez saisir au moins 3 caracteres...'
                return res.json({ message })
            }

            return Apprenant.findAndCountAll({
                where: {

                    fullName: {
                        [Op.like]: `%${fullName}%`
                    }
                },
                limit: limitValue,
                order: ['fullName']
            })
            .then(({count, rows}) => {
                const message = `Il y'a '${count}' apprenants qui correspond a votre recherche`
                res.json({ message, data: rows })
            })
        }

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



