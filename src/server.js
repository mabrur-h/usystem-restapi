const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const psql = require('./modules/postgres');

const app = express();

app.use(async (req, res, next) => {
    req.psql = await psql;
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(3000, () => {
    console.log('your server ready at http://localhost:3000');
})

fs.readdir(path.join(__dirname, "routes"), (err, files) => {
    files.forEach(file => {
        const route = require(path.join(__dirname, "routes", file));
        if (route.path && route.router) app.use(route.path, route.router);
    })
})