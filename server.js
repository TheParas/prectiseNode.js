

const express = require('express')

app.get('/', (req, res) => {
  res.send('Welcome to resturant')
})

app.get('/paneerTikka', (req, res) => {
  res.send('Panner Tikka is available at 200rs')
})
app.get('/idli', (req, res) => {
  let custumizedIdli = {
    idliType: 'rawaIdli',
    size: 'big',
    is_chutney: true,
    is_onion: false,
    is_sambhar: true,
  }
res.send(custumizedIdli)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
}) 
app.get('/todayWeather', (req, res) => {
 let temp = {
    currentTemp: 30,
    conditions: 'Sunny',
    humidity: 50,
    city: 'Delhi',
  }
  res.send(temp)
})
app.post('/items', (req, res) => { res.send(console.log('data is saved'))
  
});
