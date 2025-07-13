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
// ab server ko run karte hain, node server.js ki help se in terminal.
//abhi server k pass menu m 1 hi chiz hai, ab usse 40 baat puchoge toh usse nhi pta.

app.listen(3000) //3000 is the port number,room no of a waiter.


// const express = require('express')
// const app = express()
// app.listen(3000)