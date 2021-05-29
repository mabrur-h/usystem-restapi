const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../models/UserModel');
const SessionModel = require('../models/SessionModel');

const sequelize = new Sequelize("postgres://postgres:pgadmin@localhost:5432/usystem", {
    logging: e => console.log("SQL: ", e)
});

module.exports = postgres;

async function postgres () {
    try {
        let db = {};
        db.users = await UserModel(Sequelize, sequelize);
        db.sessions = await SessionModel(Sequelize, sequelize);
        await db.users.hasMany(db.sessions, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        // await sequelize.sync({ force: true });
        return db
    } catch (e) {
        console.log(e);
    }
}