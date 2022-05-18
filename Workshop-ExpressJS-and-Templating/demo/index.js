let express = require('express');


let app = express()
app.get('/', function(req, res) {res.send('Welcome')})


app.listen(3000)