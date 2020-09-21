const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let output = {
            name: 'Diego',
            age: '25',
            url: req.url
        }
        res.write(JSON.stringify(output));
        res.end();
    })
    .listen(8080);

console.log('listen port 8080');