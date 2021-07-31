const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type:DataTypes.INTEGER , primaryKey: true, autoIncrement: true},
    password: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue: "USER"},

})

const Card = sequelize.define('card', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    state: {type:DataTypes.STRING},
    nud: {type:DataTypes.INTEGER},
    expert: {type: DataTypes.STRING},
    img: {type:DataTypes.STRING, allowNull: false}
})

User.hasOne(Card)
Card.belongsTo(User)

module.exports = {
    User,
    Card
}
