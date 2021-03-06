// init express application
//initialize templating lib 
//create home controller
//bind routing
//create data source
//implement controllers
const { home } = require('./controllers/home')

const express = require('express');
const hbs = require('express-handlebars');
const { about } = require('./controllers/about');
const { create } = require('./controllers/create');
const { details } = require('./controllers/details');
const {notFound} = require('./controllers/notFound');
const desertService = require('./services/deserts')
const app = express();
app.engine("hbs", hbs.create({ extname: '.hbs' }).engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(desertService())

app.get('/', home)
app.get('/about', about)
app.get('/create', create)
app.get('/details/:id', details)
app.all('*',notFound)

app.listen(3000, function () { console.log('listening on port 3000'); });