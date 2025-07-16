// installing npm express, whatever we need we need to install it in our local pc.
//code npm express ki website par diya hota hai usko copy kerro aur paste kerro.

const express = require('express')
//apne system ko btana padega ki hmme express ki-jarurat hai
const app = express();
//app is just a name we can also use some other , but app is a default name used by most of the developers.
//what we did ?, we imported express(), function , ab hamere pass map hai, naksha hai, tarika hai,ki kise ham apne server ko banyanege.
//express.js ka inko instance keh sakte hain,ki ham app ki mdd se sara apna kaam karenge , app m sari vo functionality hai jisse ki 1 server ban sakta hai,
//in tin line se hamerwa server jinda hogya // const express = require('express')
// const app = express()
// app.listen(3000)
//but abhi tak vo kuch samjhega nhi kuunki hamne menu card toh banaya hi nhi, menu card m jo likha hoga wahi vo baat karega, usko bolege menu show kerro vo karega, usko bolego meny k page 2nd ka 5th item laakar do vo dega,but usse baat kerne k liye hmme menu card to chaiye hoga na.

//now before learning .get we will understand ki ham data share kese karte hain, go on day 3 notes.
app.get('/', (req, res) => {
  res.send('Welcome to resturant')
})
//.get-->sirf info chahiye, 
// '/' --> agar koi bhi address ka baad forward slash likhta hai toh usko vo data milega
//function m 2 parameters hain --> request & response
//koi bhi / enter karega address ka bad to kya response milega ? , jo res.send m lika hai.
// ab server ko run karte hain, node server.js ki help se inside terminal.
//abhi server k pass menu m 1 hi chiz hai, ab usse 40 baat puchoge toh usse nhi pta.

//app.listen(3000) //3000 is the port number,room no of a waiter.
//hogya , ab ham apne web browser m localHost:3000/ likhenge toh hame welcome to resturant ka message milega
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
}) //ab server jinda hai ya nhi kese ptaa chalega, toh ham 1 function pass kerr denge ,app.listen(3000) bta rha ki 3000 pe hamara server active hai,toh ham 1 function run kerwa denge,jo btata reh. 
// agar server ko maar de - by cntrl+c in terminal, toh server band ho jayega. now trying in broweser, the site cannot be reached.
//wapas jinda kerr do nodemon server.js
//wapas order sunne k liye ready hai sirf yhi 3 order sunega kuunki hamne menu m sirf yhi 3 order di hain. 
//get hai isliye data de rhe hain, post hota toh kuch aur karte , delete, patch hota toh kuch aur karte ..
//dal mang liye toh nhi de payega..
//for custumized idli we get the JSON object, in the web browser.
//Ans 4.b const express = require('express')
// const app = express()
// app.get('/', (req, res) => {
//   res.send('Hello, Wprld!')
// })
// app.listen(3000)
//ans 5.a JSON.parse( {"product": "Laptop", "price": 999.99})
//ans 5.b JSON.stringify({ "name": "Bob", "age": 30 })
//ans 6.
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
