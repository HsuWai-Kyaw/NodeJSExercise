// console.log("Hello NodeJs!");


//Class notes
// const fs = require('fs');
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
// console.log(helper);

import { helperFunction, isSelectedColor } from './helper.js';
// console.log(helperFunction);
const sumFunction = helperFunction();
console.log(sumFunction(2, 3)); // This will output 5
const color = isSelectedColor;
console.log(color.toString());
