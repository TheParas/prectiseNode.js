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


module.exports = router;