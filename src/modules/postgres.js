const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../models/UserModel');
const AdminModel = require('../models/AdminModel');
const FileModel = require('../models/FileModel');
const BlogModel = require('../models/BlogModel');
const SessionModel = require('../models/SessionModel');

const sequelize = new Sequelize("postgres://postgres:pgadmin@localhost:5432/usystem", {
    logging: e => console.log("SQL: ", e)
});

module.exports = postgres();

async function postgres () {
    try {
        let db = {};
        db.users = await UserModel(Sequelize, sequelize);
        db.sessions = await SessionModel(Sequelize, sequelize);
        db.admins = await AdminModel(Sequelize, sequelize);
        db.files = await FileModel(Sequelize, sequelize);
        db.blogs = await BlogModel(Sequelize, sequelize);

        await db.users.hasMany(db.sessions, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        await db.users.hasOne(db.admins, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        await db.users.hasMany(db.files, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        await db.files.belongsTo(db.users, {
            foreignKey: {
                name: 'user_id'
            }
        })

        ///

        await db.users.hasMany(db.blogs, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        })

        await db.blogs.belongsTo(db.users, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        })

        await db.files.hasMany(db.blogs, {
            foreignKey: {
                name: 'media_id',
                allowNull: true
            }
        })

        await db.blogs.belongsTo(db.files, {
            foreignKey: {
                name: 'media_id',
                allowNull: true
            }
        })


        // await db.admins.create({
        //    user_id: "877a2ae2-d1bb-4c36-a935-9271f56767ac"
        // })

        // await sequelize.sync({ force: true });
        return db
    } catch (e) {
        console.log(e);
    }
}