const express = require('express');
const router = express.Router();
const Person = require('./../models/person'); // Import the Person model

// Define routes for /person
router.get('/', async (req, res) => {
  try {
    const data = await Person.find(); //find() method se sabhi documents ka data mil jayega
    console.log('data fetched');
    res.status(200).json(data); //send the response back to the client
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); //send error response
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const person1 = new Person(data);
    // save the new person to the database
    const response = await person1.save() //async wale function ko complete hone ka wait karega

    console.log('data saved');
    res.status(200).json(response); //send the response back to the client
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); //
  }
})


router.get('/:work', async (req, res) => {
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

//routes for update
router.put('/:id', async (req, res) => {
  //:id is a placeholder, is just the name of the parameter, this id will be given by the user,whome data we want to update, we can use any name here
  try {
    const personId = req.params.id; // Extract the person ID from the URL parameter
    const updatedData = req.body; // Get the updated data from the request body 
    //ab generally client person id toh ko parameter se bhejta hai, lekin update kerne wala data json k through body se bhejta hai
    // kya vo id bhi json k through nhi bhej sakta? bhej sakta hai, lekin uske liye humein body se id ko extract karna padega, toh generally id ko parameter se hi bhejte hain
    const response = await Person.findByIdAndUpdate(personId, updatedData, {
      new: true, // Return the updated document
      runValidators: true // Run validation on the updated data
    })
    //uper wale line m ham parameter pass kerrenge, isme 2 option ho sakte hain, joh response m save honge toh ham, update se phele, update k baad, toh ham update k baad wala chahte hain toh new pass karenge, aur jo mongoose m jo validations lgga rakhe hain, vo bhi check kerr lega.
    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    //ab isme 3 case success then result mil jayega, failure when kuch error aayega, toh vo catch m pakad lega, 3rd case when person id hi nahi mila, toh uss time response null ho jayega, toh uss case m 404 error bhejenge
    console.log('data updated');
    res.status(200).json(response);
  }catch(error){
      console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})


router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id; // Extract the person's ID from the URL parameter

    // Assuming you have a Person model
    const deletedPerson = await Person.findByIdAndDelete(personId);

    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    console.log('data delete');
    // Send a success message as a JSON response
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    console.error('Error deleting person:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

    module.exports = router;