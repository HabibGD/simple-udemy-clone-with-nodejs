const auth = require('../../../auth/auth')
const Formateur = require('../../formateurs/models/formateur')



module.exports = (app) => {
    
    app.delete('/api/udemy/formateurs/:id', auth, async (req, res) => {

        const id = req.params.id
        try{
            const formateur = await Formateur.findByPk(id)
                
            if(formateur === null){
                const message = `Le formateur avec ID: ${req.params.id} n'existe pas!`
                return res.status(404).json({ message })
            }
            const formateurDeleted = formateur

            await formateur.destroy()


            res.json({ message: `Formateur \' ${formateurDeleted.fullName} \'Deleted successfuly`, data: formateurDeleted })
                
        }
        catch(err){
        
            const message = 'Nous avons rencontre des probleme, merci de reesayer plus tard'
            res.status(500).json({ message })
            
        }  
    })
}