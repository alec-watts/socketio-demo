const express = require('express');
const app = express();
const http = require('http').Server(app);

// Need to allow cross origin resource sharing so thatthe front end
// Web pagecan access the data received from the server, which has a different
// Link than the host
const io = require('socket.io')(http, {
    cors: { origin: '*' }
});

io.on('connection', (socket) => {
    console.log('New connection');

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
});

const port = 8080;
http.listen(port, () => console.log(`Listening on port ${port}`));