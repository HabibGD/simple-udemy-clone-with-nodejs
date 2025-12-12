const Formateur = require('../models/formateur')
const Cour = require('../../cours/models/cours')
const { ValidationError } = require('sequelize')
const auth = require('../../../auth/auth')



module.exports = (app) => {

    app.put('/api/udemy/formateurs/:id', auth, (req, res) => {

        const id = req.params.id
        Formateur.update(req.body, {
            where: { id: id }
        })
        .then(() => {
        return Formateur.findByPk(id)
                .then(formateur => {
                    if(formateur === null){
                        const message = `Le formateur avec ID: ${req.params.id} n'existe pas!`
                        return res.json({ message })
                    }
                    res.json({ message: 'updated successfuly', data: formateur })
                })
        })
        .catch(err => {
            if(err instanceof ValidationError){
                return res.status(400).json({ message: err.message, data: err })
            }            
            const message = 'Nous avons rencontre des probleme, merci de reesayer plus tard'
            res.status(500).json({ message })
        })    
            
    })
}