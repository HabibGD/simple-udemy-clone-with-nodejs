const auth = require('../../../auth/auth')
const Apprenant = require('../models/apprenant')


module.exports = (app) => {

    app.delete('/api/udemy/apprenants/:id', auth,  (req, res) => {

        const id = req.params.id
        return  Apprenant.findByPk(id)
                .then(apprenant => {
                    if(apprenant === null){
                        const message = `L'apprenant avec ID ${req.params.id} n'existe pas...`
                        return res.status(404).json({ message })
                    }
                    const apprenantDeleted = apprenant
                    
                    Apprenant.destroy({
                        where: { id: id }
                    })
                    .then(_ => {
                        res.json({ message: `Apprenant \' ${apprenantDeleted.fullName} \' Deleted`, data: apprenantDeleted })
                    })
                })
                .catch(err => {
                    const message = 'Nous avons rencontre une erreur lors de la suppression de cet apprenant, veuillez reessayer plus tard...'
                    res.status(500).json({ message })
                })
        
            
    })
}