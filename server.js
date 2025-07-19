

const express = require('express')
const app = express()
const db = require('./db'); // Import the database connection
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body m daal deta hai data ko, hamme bas use kerna hai.
const PORT = process.env.PORT || 3000 
//now why we use 3000 as fault above , what happens is , when we host our node file to any online server than the server gives its own port no. to it & ussi port pe vo run kerta hai, agar port define nhi hoga iska matlb vo local run kerr rha hai toh vo default value m 3000 kodefine kerr dega.

const Person = require('./models/person'); // Import the Person model
const MenuItem = require('./models/menuItem');
const Task = require('./models/task'); // Import the Task model

app.get('/', (req, res) => {
  res.send('Welcome to resturant')
})

app.post('/person', async (req, res) => {
  try {
    const data = req.body; //data aayega toh use req.body se le lenge 
    //data toh le liya hamne ab ham yeh data ko kisko deyenge toh hamme 1 document toh bnnana hoga jisko ham apna data store kerr paye, toh us document ko ham Person model(mongoose model) se bnnayenge.)
    //create a new Person document using the mongoose model
    // const person1 = new Person(); //abhi tak yeh blank hai (empty table ki tarah hai)
    // person1.name = data.name;
    // person1.age = data.age;
    // person1.work = data.work;
    // person1.mobile = data.mobile;
    // person1.email = data.email;
    // person1.address = data.address;
    // person1.salary = data.salary;
    const person1 = new Person(data);
    // save the new person to the database
    const response = await person1.save() //async wale function ko complete hone ka wait karega
    //now doubt aayega ki agar error aagya toh hamne data saved kuun print kerrwaya, yhi quality hai try & catch ki , error pakdte hi aage ka kuch nhi chalega aur cath m chlla jayega.
    console.log('data saved');
    res.status(200).json(response); //send the response back to the client
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); //send error response
  }
})

// GET method to get the person
app.get('/person', async (req, res) => {
  try {
    const data = await Person.find(); //find() method se sabhi documents ka data mil jayega
    console.log('data fetched');
    res.status(200).json(data); //send the response back to the client
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); //send error response
  }
})


app.post('/api/tasks', async (req, res) => {
  try {
    const data = req.body; //data aayega toh use req.body se le lenge 
    const task = new Task(data); //create a new Task document using the mongoose model
    const response = await task.save(); //save the new task to the database
    console.log('Task saved');
    res.status(200).json(data); //send the response back to the client
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); //send error response
  }
})

app.get('/api/tasks', async (req, res) => {
  try {
    const data = await Task.find(); //find() method se sabhi tasks ka data mil jayega
    console.log('Tasks fetched');
    res.status(200).json(data); //send the response back to the client
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); //send error response
  }
})


app.get('/person/:work', async (req, res) => {
  try {
    const workType = req.params.work; // Extract the work type from the URL parameter
    if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
      // Assuming you already have a Person model and MongoDB connection set up
      const persons = await Person.find({ work: workType });

      // Send the list of persons with the specified work type as a JSON response
      res.json(persons);
    } else {
      res.status(404).json({ error: 'Invalid work type' });
    }
  } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const personRoutes = require('./routes/personRoutes'); // Import the person routes
const menuItemRoutes = require('./routes/menuItemRoutes'); // Import the menu item routes
app.use('/person', personRoutes); // Use the person routes
app.use('/menu', menuItemRoutes); // Use the menu item routes



app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

