module.exports = (Sequelize, sequelize) => {
    return sequelize.define('admins', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        }
    })
}