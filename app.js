const express = require('express')
const sequelize = require('./src/db/sequelize')
const { Formateur, Cour } = require('./src/models/index')



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


// Cours Endpoints 

require('./src/models/cours/routes/createCours')(app)
require('./src/models/cours/routes/findAllcours')(app)
require('./src/models/cours/routes/findCoursByid')(app)























app.listen(port, () => console.log(`http://localhost:${port}`))

