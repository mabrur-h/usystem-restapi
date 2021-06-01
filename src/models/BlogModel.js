module.exports = (Sequelize, sequelize) => {
    return sequelize.define('blogs', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        title: {
            type: Sequelize.DataTypes.STRING(512),
            allowNull: false
        },
        body: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },
        views: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 1
        },
        slugify: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        }
    })
}