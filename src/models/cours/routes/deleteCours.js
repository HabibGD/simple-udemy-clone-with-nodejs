const Cour = require('../models/cours')


module.exports = (app) => {

    app.delete('/api/udemy/cours/:id', (req, res) => {

        const id = req.params.id
        Cour.findByPk(id)
            .then(cour => {
                const deletedCour = cour
                Cour.destroy({
                    where: { id: id }
                })
                .then(_ => {
                    res.json({ message: `cour \' ${deletedCour.title} \' deleted successfully`, data: deletedCour })
                })
                .catch(err => {
                    res.json({ message: 'error founded', error: err.message })
                })
            })
            .catch(err => {
                res.json({ message: 'error founded', error: err.message })
            })
    })
}