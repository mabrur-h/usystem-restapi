module.exports = (Sequelize, sequelize) => {
    return sequelize.define('users', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        phone: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            min: 998000000000,
            max: 998999999999
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