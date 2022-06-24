const mongoose = require('mongoose')
require('../models/User')

// TO DO smeni imeto na bazata danni
const DBname = 'wildfire'
const connectionString = `mongodb://localhost:27017/${DBname}`

module.exports = async (app) => {
  try{  await mongoose.connect(connectionString, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`Connected to DB`)

    mongoose.connection.on('error', (err) => {
        console.log('DB error');
        console.log(err)
    })
} catch (err) {
         console.error(`Error connecting to DB`);
        process.exit(1)}
}