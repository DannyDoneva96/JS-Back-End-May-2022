const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
app.use(express.static('public'));

app.engine('hbs',handlebars.engine({
    extname:'hbs',

}));
app.set('view engine','hbs')

const port = 3000;

app.get('/', (req, res) =>{
    res.render('index.hbs',)
})


app.listen(port,()=>console.log('listening on port...'))