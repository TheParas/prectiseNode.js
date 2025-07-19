require('dotenv').config();
const mongoose = require('mongoose');

//define the MongoDB connection URL
//const mongoURL = 'mongodb://localhost:27017/hotels'; //can use anyname in place of hotel
// const mongoURL = process.ev.MONGODB_URL_LOCAL  //using local database with .env
const mongoURL = process.env.MONGODB_URL //omline database.(secerat file.ev m pddi hai)
//now yeh connect nhi ho payega kuunki isko .env file k bare m nhi ptaa.


//set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//we are ensuring that we are working with the new mongoDB
//  Get the default connection
// Mongoose maintains a default connection object(db) represents the mongoDB connectiom.
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server');
});

//(now toh hammne db file m sab likh toh diya, ab hmme export kerr k server file pe run kerwana hoga)
// Export the db object for use in other files
module.exports = db;
