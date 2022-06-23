const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);


//Sending our html file
app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html')
})


//connect to socket.io and do stuff
io.on('connection', (socket) => {
    console.log('new user signed in')
    socket.on('disconnect', () => {
        console.log('user signed out')
    })
    socket.on('chat message', (msg) => {
io.emit('chat message', msg)
    })
})


//since we mounted our app to the server we call server.listen()
server.listen(3000, () => {
    console.log('listening on port 3000')
})  