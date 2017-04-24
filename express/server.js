'use strict';
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Hallo Welt');
});

let server = app.listen(8080, () => {
    let port = server.address().port;
    console.log("Server läuft unter http://localhost:%s", port);
});
