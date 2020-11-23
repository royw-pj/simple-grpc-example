const express = require('express');
const http = require('http');
const crypto = require("crypto");
const app = express();

function getRandomNumber({ from, to, dp }) {
    return (Math.random() * (to - from) + from).toFixed(dp || 0);
}

app.get('/products', function (req, res) {
    const resp = [];
    const count = 3;
    for (let i = 0; i < count; i++) {
        resp.push({
            code: '00' + getRandomNumber({ from: 100, to: 500 }) + '.HK',
            description: crypto.randomBytes(2).toString('hex'),
            price: getRandomNumber({ from: 1, to: 100, dp: 2 }),
        });
    }
    res.json(resp);
});

const httpServer = http.createServer(app);
httpServer.listen(process.env.SERVER_PORT || 4888);