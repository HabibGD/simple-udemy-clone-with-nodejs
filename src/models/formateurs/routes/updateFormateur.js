const Formateur = require('../models/formateur')
const Cour = require('../../cours/models/cours')



module.exports = (app) => {

    app.put('/api/udemy/formateurs/:id', (req, res) => {

        const id = req.params.id
        Formateur.update(req.body, {
            where: { id: id }
        })
        .then(() => {
            Formateur.findByPk(id)
                .then(formateur => {
                    res.json({ message: 'updated successfuly', data: formateur })
                })
                .catch(err => {
                    res.json({ message: 'error founded', error: err.message })
                })
        })
        .catch(err => {
            res.json({ message: 'error', error: err.message })
        })
        
            
    })
}