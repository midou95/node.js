const { Console } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  if(err)throw err
});
server.listen(8000);
console.log('hello world')