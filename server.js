

const express = require('express')
const app = express()
const db = require('./db'); // Import the database connection

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); //req.body m daal deta hai data ko, hamme bas use kerna hai.

const Person = require('./models/person'); // Import the Person model
const MenuItem = require('./models/menuItem'); 
const Task = require('./models/task'); // Import the Task model

app.get('/', (req, res) => {
  res.send('Welcome to resturant')
})

app.post('/person',async (req, res) => 
  {
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
      try{
          const data = await Person.find(); //find() method se sabhi documents ka data mil jayega
          console.log('data fetched');
          res.status(200).json(data); //send the response back to the client
      }catch(error){
          console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); //send error response
         }
    })
  
    app.post('/menu', async (req, res) => {
      try {
          const data = req.body; //data aayega toh use req.body se le lenge 
          const menuItem = new MenuItem(data); 
          const response = await menuItem.save(); //save the new menu item to the database
          console.log('Menu item saved');
          res.status(200).json(data); //send the data as response back to the client
      } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Internal Server Error' }); //send error response
      }
    }
    )

    app.get('/menu', async (req, res) => {
      try {
        const data = await MenuItem.find(); //find() method se sabhi menu items ka data mil jayega
        console.log('Menu items fetched');
        res.status(200).json(data); //send the response back to the client
      }catch {
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
    

app.listen(3000, () => {
  console.log('Server is running on port 3000')
}) 

