const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // handle method from FORM
    if (method === 'POST' && url === '/') {
        let data = "";
        req.on('data', d => {
            data += d;
            console.log(queryString.parse(d));
        });
        req.on('end', () => {
            console.log(data);
        });
    }

    if (url == "/") {
        fs.readFile('./page/index.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }
    else if (url == "/about") {
        fs.readFile('./page/about.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }
    else {
        fs.readFile('./page/contact.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }
});

server.listen(4000, () => {
    console.log('Server Running');
});
