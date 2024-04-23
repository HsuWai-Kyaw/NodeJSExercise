// const express = require('express');
import express from 'express';
import router from './router.js';
const app = express();

//static routes
app.use(express.static('assets'));

//router routes
app.use(router);

//Global Middleware
// app.use((req, res, next) => {
//     console.log('Global Middleware');
//     next();
// });

//Route Middleware
// app.use('/', (req, res, next) => {
//     console.log('Middleware is available');
//     next();
// });


//Route Middleware With Parameters 
// app.use('/user/:id', (req, res, next) => {
//     console.log('Route middleware is available');
//     next();
// })

//Route With Parameters
// app.get('/user/:id', (req, res) => {
//     console.log(req.params.id);
// });


//Route
// app.get('/', (req, res) => {
//     console.log('get method');
//     res.send('Express Test in get method');
// })

// app.get('/test', (req, res) => {
//     console.log('Testing Route Directory');
//     res.send('Express Route Testing');
// })

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
