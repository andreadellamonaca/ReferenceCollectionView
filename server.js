const http = require("http");
const app = require("./app");

const port = process.env.port || 6001;

const server = http.createServer(app);
console.log('Listening port: ' + port);
server.listen(port);