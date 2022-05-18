let express = require('express');


let app = express()
app.get('/', function (req, res) { res.send('Welcome') })



app.post('/create', function (req, res) {
    res.status(201).send('created')

})

app.listen(3000)