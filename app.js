const express = require('express')
const sequelize = require('./src/db/sequelize')
const { Formateur, Cour, Apprenant } = require('./src/models/index')



const app = express()
const port = 3000


app.use(express.json())


sequelize.authenticate()
    .then(() => console.log('Connexion a la base de donnee reuissi'))
    .catch(err => console.error(err))


    
sequelize.sync({ alter: true })
    .then(() => console.log('Synchornisation reuissi'))
    .catch(err => console.error(err))


// My endpoinst

//      Formateur endpoints

require('./src/models/formateurs/routes/createFormateur')(app)
require('./src/models/formateurs/routes/findAllformateurs')(app)
require('./src/models/formateurs/routes/findFormateurByid')(app)
require('./src/models/formateurs/routes/updateFormateur')(app)
require('./src/models/formateurs/routes/deleteFormateurs')(app)


// Cours Endpoints 

require('./src/models/cours/routes/createCours')(app)
require('./src/models/cours/routes/findAllcours')(app)
require('./src/models/cours/routes/findCoursByid')(app)
require('./src/models/cours/routes/updateCours')(app)
require('./src/models/cours/routes/deleteCours')(app)

// Apprenant Endpoint

require('./src/models/apprenants/routes/createApprenant')(app)
require('./src/models/apprenants/routes/findAllapprenants')(app)
require('./src/models/apprenants/routes/findApprenantByid')(app)
require('./src/models/apprenants/routes/updateApprenant')(app)
require('./src/models/apprenants/routes/deleteApprenant')(app)
require('./src/models/apprenants/routes/inscrireCours')(app)






// Gestion des erreurs 404

app.use(({res}) => {
    const message = 'impossible de trouver cette page, veuillez bien verifier l\'URL'
    res.status(404).json({ message })
})






app.listen(port, () => console.log(`http://localhost:${port}`))

