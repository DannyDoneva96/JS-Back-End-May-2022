//Loads the express module
const express = require('express');


const routes = require('./routes')
//Loads the handlebars module
const handlebars = require('express-handlebars');

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



app.use(routes)

// //Sets a basic route
// app.get('/', (req, res) => res.send('Hello World !'));

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));