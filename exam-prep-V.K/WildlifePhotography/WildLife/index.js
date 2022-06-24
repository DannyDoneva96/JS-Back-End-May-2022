const express = require('express');
const expressConfig = require('./config/express');
// const cookieParser = require('cookie-parser');
// const routes = require('./routes')
// const {dbInit} = require('./config/db')
// const {auth} = require('./middlewares/authMiddleware')
// const {errorHandler} = require('./middlewares/errorHandlerMiddleware')


start();

async function start() {
    const app = express();

  expressConfig(app)
    app.get('/', (req, res) => res.render('home', { layout: false }))
    app.listen(3000, () => console.log(`App listening to port 3000`));
}




// app.use(express.urlencoded({ extended: false }))
// app.use(express.static('public'))

// app.use(cookieParser())
// app.use(auth)
// app.use(routes)
// app.use(errorHandler)

// dbInit();
