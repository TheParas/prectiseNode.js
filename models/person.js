const mongoose = require('mongoose');

//Define the Person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
  enum: ['chef', 'waiter', 'manager'],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  }, email: {
    type: String,
    required: true,
    unique: true, //already database m check kerr k bta deta hai
  }, address: {
    type: String,
    required: true,
  }, salary: {
    type: Number,
    required: true,
  }
});

  //now above is the schema but now we need to create a model from this schema,& then we can use this model to create and manage documents in the 'persons' collection in MongoDB.
  //create Person model
const Person = mongoose.model('Person', personSchema);
// Export the Person model
module.exports = Person;
