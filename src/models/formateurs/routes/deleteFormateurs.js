const Formateur = require('../../formateurs/models/formateur')



module.exports = (app) => {
    
    app.delete('/api/udemy/formateurs/:id', (req, res) => {

        const id = req.params.id
        return  Formateur.findByPk(id)
                .then(formateur => {
                    if(formateur === null){
                        const message = `Le formateur avec ID: ${req.params.id} n'existe pas!`
                        return res.json({ message })
                    }
                    const formateurDeleted = formateur

                    Formateur.destroy({
                        where: { id: id }
                    })
                    .then(_ => {
                        res.json({ message: `Formateur \' ${formateurDeleted.fullName} \'Deleted successfuly`, data: formateurDeleted })
                    })
                
                })
                .catch(err => {
                    const message = 'Nous avons rencontre des probleme, merci de reesayer plus tard'
                    res.status(500).json({ message })
                })            

    })
}