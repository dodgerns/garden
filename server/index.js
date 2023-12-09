const express = require("express");
const http = require('http');
const { Server } = require("socket.io");
const ConnectionDB = require('./connection/connection_db.js');
const ApiRest = require('./api_rest/api_rest.js');
const Rooms = require('./room/rooms.js');

async function main() {
    const app = express();
    const port = process.env.PORT || 3001;
    const server = http.createServer(app);
    const io = new Server(server);
    
    const connectionDB = new ConnectionDB();
    await connectionDB.updateData();

    const apiRest = new ApiRest(app, connectionDB);

    const rooms = new Rooms(io, connectionDB);

    server.listen(port, () => console.log(`App listening on port ${port}!`));

    server.keepAliveTimeout = 120 * 1000;
    server.headersTimeout = 120 * 1000;
}

main()
    .then(() => {
        console.log('Is reasy');
    })
    .catch((error) => {
        console.error('Error:', error);
    });