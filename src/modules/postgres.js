const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://postgres:pg_admin@localhost:5432/usystem", {
    logging: e => console.log("SQL: ", e)
});

sequelize.define('users', {
    name: {
        type: Sequelize.DataTypes.STRING(32),

    }
})

;(async function() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully!');
        await sequelize.sync({ force: true });
    } catch (e) {
        console.log(e);
    }
})()