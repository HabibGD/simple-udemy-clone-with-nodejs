const Formateur = require('../../formateurs/models/formateur')



module.exports = (app) => {
    
    app.delete('/api/udemy/formateurs/:id', (req, res) => {

        const id = req.params.id
        Formateur.findByPk(id)
            .then(formateur => {
                const formateurDeleted = formateur

                Formateur.destroy({
                    where: { id: id }
                })
                .then(_ => {
                    res.json({ message: `Formateur \' ${formateurDeleted.fullName} \'Deleted successfuly`, data: formateurDeleted })
                })
                .catch(err => {
                    res.json({ message: 'error founded', error: err.message })
                })
            })

    })
}