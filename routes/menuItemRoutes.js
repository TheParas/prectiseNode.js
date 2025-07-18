const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/menuItem');


router.post('/', async (req, res) => {
  try {
    const data = req.body; //data aayega toh use req.body se le lenge 
    const menuItem = new MenuItem(data);
    const response = await menuItem.save(); //save the new menu item to the database
    console.log('Menu item saved');
    res.status(200).json(response); //send the data as response back to the client
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); //send error response
  }
}
)

router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find(); //find() method se sabhi menu items ka data mil jayega
    console.log('Menu items fetched');
    res.status(200).json(data); //send the response back to the client
    // response -> actualnObject, //data -> raw input, response is good because it checks.
  } catch {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); //send error response
  }
})

router.get('/:taste' , async (req, res) => {
  try{
const tasteFeel = req.params.taste;//extracting the taste id from the URL parameter
if(tasteFeel === 'Sour' || tasteFeel === 'Sweet' || tasteFeel === 'Spicy') {
//we have defined only 3 types of taste in a dish.
const menuItem  = await MenuItem.find({ taste: tasteFeel})
// sending the list of items of given taste  as a JSON response
res.json(menuItem);
} else {
  res.status(404).json({ error: 'Invalid taste type' });
}
 }catch(error) {
    console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id' , async (req, res) => { 
  try{
        //:id is a variable name , it holds the value of unique id.
        const itemId = req.params.id; // extract the item id, which is automatically saved in body parser.
        const updatedItem = req.body; //saving what we need to to update from req.body to a variable.
        const response = await MenuItem.findByIdAndUpdate(itemId, updatedItem, {
          new: true, //Returning the new updated document as a response
          runValidators: true //run validations on the updated data
        })
        if(!response) {
          return res.status(404).json({error: 'item not found'});
        }
          console.log('item updated');
          res.status(200).json(response);
  }catch 
(error){
      console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.delete('/:id', async(req, res) => { 
  try{
 const itemId = req.params.id;
 const response = await MenuItem.findByIdAndDelete(itemId)
  if(!response) {
          return res.status(404).json({error: 'item not found'});
        }
            console.log('item updated');
          res.status(200).json(response);
  } catch(error){
      console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
  }
)
module.exports = router;