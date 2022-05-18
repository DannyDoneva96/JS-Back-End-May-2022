let express = require('express');


let app = express()
app.get('/', function (req, res) { res.send('Welcome') })


app.get('/create', function (req, res) { res.send('<form method="POST"><input  name="name"><button>Send</button></form>') })

app.get('/about', function (req, res) { res.send('<form method="POST"><input  name="name"><button>About</button></form>') })

app.get('/catalogue', function (req, res) {
    res.send('Catalogue')
})
// matching everything with *

// app.get('/catalogue/*', function (req, res) {
//     res.send('Product page')
// })

// getting params from url
app.get('/catalogue/:id/details', function (req, res) {
    console.log(req.params)
    res.send('details page')
})


app.post('/create', function (req, res) {
    res.status(201).send('created')

})

// chainable handlers

app.route('/home')
.get((req, res) => {res.send('Welcome home')})
.post((req, res) => {res.send('Welcome home post req')})
.all((req, res) => {res.send('Everything else')})

// redirect to another page
app.get('/about/old', function (req, res){ res.redirect('/about')})
app.listen(3000)