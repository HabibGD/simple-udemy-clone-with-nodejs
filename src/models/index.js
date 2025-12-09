const Formateur = require('./formateurs/models/formateur')
const Cour = require('./cours/models/cours')
const Apprenant = require('./apprenants/models/apprenant')




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


Apprenant.belongsToMany(Cour, {

    through: 'apprenant_cours',
    foreignKey: 'apprenant_id',
    otherKey: 'cour_id'
})


Cour.belongsToMany(Apprenant, {
    through: 'apprenant_cours',
    foreignKey: 'cour_id',
    otherKey: 'apprenant_id'
})





module.exports = { Formateur, Cour, Apprenant }