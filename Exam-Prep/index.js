//Loads the express module
const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const routes = require('./routes')
const {dbInit} = require('./config/db')
const {auth} = require('./middlewares/authMiddleware')
const {errorHandler} = require('./middlewares/errorHandlerMiddleware')

//Loads the handlebars module


//Creates our express server
const app = express();
const port = 3000;

//Sets our app to use the handlebars engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs');
// parse the body 

app.use(express.urlencoded({ extended: false }))
//Serves static files (we need it to import a css file)
app.use(express.static('public'))

app.use(cookieParser())
app.use(auth)
app.use(routes)
app.use(errorHandler)
// //Sets a basic route
// app.get('/', (req, res) => res.send('Hello World !'));

// start dbInit
dbInit();
//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));