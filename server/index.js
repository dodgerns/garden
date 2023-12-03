const express = require("express");
const path = require("path");
const port = process.env.PORT || 3001;
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const { dataPlant, messagePlant } = require("./connection/connection.js");


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/nfts',( req, res)=>{
    res.json(dataPlant);
});

io.on('connection', (socket) => {
    console.log('Usuario conectado');

    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`Usuario se unió a la sala: ${room}`);
    });

    // Manejar los mensajes del chat
    socket.on('sendMessage', (data) => {
        console.log(data);
        const messagesPlant = messagePlant[data.room]['entities'];
        const messageEntity = messagesPlant.find(entity => entity.id === data.message);
        if(messageEntity){
            io.to(data.room).emit('message', messageEntity);
        }
    });

    socket.on('leaveRoom', (room) => {
        socket.leave(room);
        console.log(`Usuario salió de la sala: ${room}`);
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

server.listen(port, () => console.log(`App listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
