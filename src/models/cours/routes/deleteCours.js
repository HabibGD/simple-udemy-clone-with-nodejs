const Cour = require('../models/cours')


module.exports = (app) => {

    app.delete('/api/udemy/cours/:id', (req, res) => {

        const id = req.params.id
        return Cour.findByPk(id)
                .then(cour => {
                    if(cour === null){
                        const message = `Il n'existe pas de cour avec l'ID ${req.params.id}`
                        return res.status(404).json({ message })
                    }
                    const deletedCour = cour
                    Cour.destroy({
                        where: { id: id }
                    })
                    .then(_ => {
                        res.json({ message: `cour \' ${deletedCour.title} \' deleted successfully`, data: deletedCour })
                    })
                })
                .catch(err => {
                    const message = 'Nous avons rencontre une erreur lors de la suppresionn de cette formation, veuillez reessayer plus tard...'
                    res.status(500).json({ message })
                })
        })
}