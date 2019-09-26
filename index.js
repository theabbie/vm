const http = require('http');
http.createServer((request, response) => {
  response.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache'
  });
  let id = 1;
  // Send event every 3 seconds or so forever...
  setInterval(() => {
    response.write(
      `event: myEvent\nid: ${id}\ndata:This is event ${id}.`
    );
    response.write('\n\n');
    id++;
  }, 3000);
}).listen(process.env.PORT);
