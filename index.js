const fs = require('fs');
const path = require('path');
const express = require('express');

const app = new express;

app.use((req, res, next) => {
    const url = req.path;
    const dataPath = path.join(__dirname, 'mock', url);
    fs.readFile(dataPath, (err, data) => {
        if (err) {
            next();
        } else {
            res.type('application/json');
            res.send(data.toString());
        }
    });
});

app.listen(1235, '0.0.0.0', () => {
    console.log('mock server running on port 1235');
});
