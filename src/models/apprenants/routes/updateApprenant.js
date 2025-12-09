const Apprenant = require('../models/apprenant')



module.exports = (app) => {

    app.put('/api/udemy/apprenants/:id', (req, res) => {

        const id = req.params.id
        Apprenant.update(req.body, {
            where: { id: id }
        })
        .then(_ => {
            Apprenant.findByPk(id)
                .then((apprenant) => {
                    res.json({ message: `Apprenant \' ${apprenant.fullName} \' updated successfully`, data: apprenant })
                    })
                .catch(err => {
                        res.json({ message: 'error', error: err.message })
                    })

        })
            
    })
}