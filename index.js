var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var { Server } = require('socket.io');
var io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'\\index.html');
});
io.on('connection', (socket) => {
    console.log("a user connected");
    socket.on('pressed', () => {
        console.log('a user pressed a button');
        io.emit('pressed');
    });
    socket.on('disconnect', function() {
        console.log('a user disconncted');
    });
});
app.listen(3000, '0.0.0.0');