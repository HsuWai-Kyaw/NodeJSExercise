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
import server from 'http';
server.createServer((req, res) => { res.end('Port No: 3333 Run Test') }).listen(3333, () => { console.log('Server Running on 3333 Port'); });







