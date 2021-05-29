const bcrypt = require('bcrypt');

module.exports = (Sequelize, sequelize) => {
    return sequelize.define('users', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        name: {
            type: Sequelize.DataTypes.STRING(32),
            allowNull: false
        },
        password: {
            type: Sequelize.DataTypes.STRING(64),
            allowNull: false
        }
    })
}