const Cour = require('../models/cours')
const Formateur = require('../../formateurs/models/formateur')




module.exports = (app) => {

    app.put('/api/udemy/cours/:id', (req, res) => {

        const id = req.params.id
        Cour.update(req.body, {
            where: { id: id }
        })
        .then(_ => {
            Cour.findByPk(id)
                .then(cour => {
                    res.json({ message: 'Cour updated successfully', data: cour })
                })
        })
    })
}