// console.log("Hello NodeJs!");


//Class notes
// const fs = require('fs'); //didn't work properly

// import fs from 'fs';
// const note = fs.readFileSync('text.txt');
// console.log(note.toString());

// 2. Synchronous Way - use readFileSync keyword
// import fs from 'fs';
// console.log('Start');
// const fsPath = fs.readFileSync('text.txt');
// console.log(fsPath.toString());
// console.log('end');

// 3. Asynchronous Way - use readFile keyword
// import fs from 'fs';
// console.log('Start Point');
// fs.readFile('text.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });
// console.log('End Point');


// 4. First Module
// const helper = require('../helper');
// console.log(helper); //didn't work properly

// import { helperFunction, isSelectedColor } from './helper.js';
// // console.log(helperFunction);
// const sumFunction = helperFunction();
// console.log(sumFunction(2, 3)); // This will output 5
// const color = isSelectedColor;
// console.log(color.toString());

// 5. HTTP Server
// const server = require('http');
// import server from 'http';
// server.createServer((req, res) => {
//     res.end('Port No: 3333 Run Test')
// }).listen(3333, () => {
//     console.log('Server Running on 3333 Port');
// });


// 6. Render HTML doc
// import server from 'http';
// import fs from 'fs';

// server.createServer((req, res) => {
//     fs.readFile('./page/index.html', (err, data) => {
//         res.write(data);
//         res.end();
//     });
// }).listen(3333, () => {
//     console.log('Server Running');
// });


// 7. Static Web Page
// import server from 'http';
// import fs from 'fs';

// server.createServer((req, res) => {
//     // console.log(req.url);
//     const url = req.url;
//     console.log(req.method);
//     if (url == "/") {
//         fs.readFile('./page/index.html', (err, data) => {
//             res.write(data);
//             res.end();
//         });
//     }
//     else if (url == "/about") {
//         fs.readFile('./page/about.html', (err, data) => {
//             res.write(data);
//             res.end();
//         });
//     }
//     else {
//         fs.readFile('./page/contact.html', (err, data) => {
//             res.write(data);
//             res.end();
//         });
//     }
// }).listen(3333, () => {
//     console.log('Server Running');
// });


// 9. Form Data //
// import server from 'http';
// import fs from 'fs';

// server.createServer((req, res) => {
//     // console.log(req.url);
//     const url = req.url;
//     // console.log(req.method);
//     const method = req.method;

//     // handle method from FORM
//     if (method === 'POST' && url === '/') {
//         console.log('Hi');
//     }

//     if (url == "/") {
//         fs.readFile('./page/index.html', (err, data) => {
//             res.write(data);
//             res.end();
//         });
//     }
//     else if (url == "/about") {
//         fs.readFile('./page/about.html', (err, data) => {
//             res.write(data);
//             res.end();
//         });
//     }
//     else {
//         fs.readFile('./page/contact.html', (err, data) => {
//             res.write(data);
//             res.end();
//         });
//     }
// }).listen(3333, () => {
//     console.log('Server Running');
// });


// 10. Read Form Data

import server from 'http';
import fs from 'fs';
import queryString from 'querystring';

server.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // handle method from FORM
    if (method === 'POST' && url === '/') {
        // console.log('Hi');
        let data = "";
        req.on('data', d => {
            // console.log(d.toString());
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
}).listen(3333, () => {
    console.log('Server Running');
});


// import http from 'http';
// import fs from 'fs';
// import queryString from 'querystring';

// http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;

//     // Handle POST request at root URL
//     if (method === 'POST' && url === '/') {
//         let data = '';
//         req.on('data', d => {
//             data += d; // Accumulate data d
//         });

//         req.on('end', () => {
//             // Parse the accumulated data
//             const parsedData = queryString.parse(data);
//             console.log(parsedData);

//             // Send a response
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('Data received and parsed');
//         });
//     } else if (url === "/") {
//         // Serve index.html for root URL
//         fs.readFile('./page/index.html', (err, data) => {
//             if (err) {
//                 res.writeHead(404, { 'Content-Type': 'text/plain' });
//                 res.end('File not found');
//                 return;
//             }
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     } else if (url === "/about") {
//         // Serve about.html for /about URL
//         fs.readFile('./page/about.html', (err, data) => {
//             if (err) {
//                 res.writeHead(404, { 'Content-Type': 'text/plain' });
//                 res.end('File not found');
//                 return;
//             }
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     } else {
//         // Serve contact.html for other URLs
//         fs.readFile('./page/contact.html', (err, data) => {
//             if (err) {
//                 res.writeHead(404, { 'Content-Type': 'text/plain' });
//                 res.end('File not found');
//                 return;
//             }
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     }
// }).listen(3333, () => {
//     console.log('Server running on port 3333');
// });
