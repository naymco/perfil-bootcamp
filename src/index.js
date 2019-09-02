const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(bodyParser.urlencoded({ extended: false }));


// Settings:
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// Middlewares:
app.get('/sendform', (req, res)=>{
    res.render('sendform', {qs: req.query});
});

app.post('/sendform', (req, res)=>{
    console.log(req.body);
    res.render('sendform', {qs: req.query});
});

app.use(require('body-parser')());
app.use(morgan('dev'));

// Routes:
app.use(require('./routes/'));

// Static files:
app.use(express.static(path.join(__dirname, 'public')));

// Start server:
app.listen(app.get('port'), '0.0.0.0',()=> {
    console.log('Server ON in port: ', app.get('port'));
});
