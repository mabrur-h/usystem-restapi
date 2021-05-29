const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../models/UserModel')

const sequelize = new Sequelize("postgres://postgres:pgadmin@localhost:5432/usystem", {
    logging: e => console.log("SQL: ", e)
});

module.exports = postgres();

async function postgres () {
    try {
        let db = {};
        db.users = UserModel(Sequelize, sequelize);
        // let user = await db.users.create({
        //     name: "mabrur",
        //     password: "testtest"
        // })
        // console.log(user)
        // await sequelize.sync({ force: true });
        return db
    } catch (e) {
        console.log(e);
    }
}