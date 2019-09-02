const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.html', {title: 'My Portfolio'});
});

router.get('/contact', (req, res)=>{
    res.render('contact.html', {title: 'Contact me!'});
});

router.get('/curriculum', (req, res)=>{
    res.render('curriculum.html', {title: 'Curriculum'});
});

router.get('/sendform', (req, res)=>{
    res.render('sendform.html', {title: 'Mensaje Enviado'});
});

module.exports = router;