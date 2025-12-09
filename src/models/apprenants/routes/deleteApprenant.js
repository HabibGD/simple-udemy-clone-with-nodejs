const Apprenant = require('../models/apprenant')


module.exports = (app) => {

    app.delete('/api/udemy/apprenants/:id', (req, res) => {

        const id = req.params.id
        Apprenant.findByPk(id)
            .then(apprenant => {
                const apprenantDeleted = apprenant
                
                Apprenant.destroy({
                    where: { id: id }
                })
                .then(_ => {
                    res.json({ message: `Apprenant \' ${apprenantDeleted.fullName} \' Deleted`, data: apprenantDeleted })
                })
                .catch(err => {
                    res.json({ message: 'we found somes issues', error: err.message })
                })
            })
            .catch(err => {
                res.json({ message: 'error', error: err.message })
            })
        
            
    })
}