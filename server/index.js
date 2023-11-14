const express = require("express");
const path = require("path");

const port = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "..", "public/index.html")));

const server = app.listen(port, () => console.log(`App listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
