const express = require('express');

const app = express();

app.get("/home", (req,res) => {
res.sendFile(__dirname+'/index.html');
});

app.get('/*', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });
    setInterval(function() {res.write("hello world")},2000);
});

app.listen(process.env.PORT);
