const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const psql = require('./modules/postgres');
const morgan = require('morgan');
const helmet = require('helmet');



const app = express();

app.use(async (req, res, next) => {
    req.psql = await psql;
    next();
})

app.use(morgan('dev'));
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.listen(3000, () => {
    console.log('your server ready at http://localhost:3000');
})

fs.readdir(path.join(__dirname, "routes"),  async (err, files) => {
    await files.forEach(file => {
        const route = require(path.join(__dirname, "routes", file));
        if (route.path && route.router) app.use(route.path, route.router);
    })
    await app.use((_, res) => res.status(404).json({
        ok: false,
        message: "Not found"
    }))
})