const mongoose = require('mongoose');

const DB_QUERYSTRING = 'mongodb://localhost:27017/artGallery'

exports.dbInit = ()=> {

    mongoose.connect(DB_QUERYSTRING);

    mongoose.connection.on('open',()=> console.log('BD connected!'))
};