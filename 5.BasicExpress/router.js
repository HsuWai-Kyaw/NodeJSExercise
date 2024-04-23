import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Express Router');

});

router.get('/about', (req, res) => {
    res.send('Welcome From About Page');
});

export default router;