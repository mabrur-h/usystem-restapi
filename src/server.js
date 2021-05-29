const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('your server ready at http://localhost:3000');
})

app.get('/', (_, res) => {
    res.json({
        ok: true
    })
})