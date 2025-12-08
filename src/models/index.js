const Formateur = require('./formateurs/models/formateur')
const Cour = require('./cours/models/cours')



Formateur.hasMany(Cour, {
    foreignKey: {
        name: "formation_id",
        allowNull: false
    },
    onDelete: "CASCADE"
})


Cour.belongsTo(Formateur, {
    foreignKey: {
        name: "formation_id",
        allowNull: false
    }
})


module.exports = { Formateur, Cour }