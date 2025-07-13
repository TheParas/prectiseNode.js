// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo('os');
// console.log(user.username);

/*
day 2
ans1. npm is like a store, it has many functions,librararies, which we can directly use, we will get npm by copy the code from wensite in console, like npm i ... in this package.json & package lock.json files are created in ehich they store user data & other meta data.. & other i have already done that before,

ans2. */
/*
var prompt = require('prompt-sync')();
const radius =parseFloat(prompt("Please enter radius of a circle to find its area"));

// let area = function calculateCircleArea(r) {
//   let finalArea;
//   finalArea = 3.14 * r * r ;
//  return finalArea; 
//  }
//  area(radius);
//  console.log(area(radius));

//  let area = function (r) {
//   return 3.14 * r * r;
// };
// console.log(area(radius));

 let area = (r) => Math.PI * r * r;
 console.log(area(radius));
/*

// ans3 .
*/

/*// Callback functions - ans 3 
function performOperation(a, b, callback) { 

  return callback(a, b);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(performOperation(5, 3, subtract)); 

*/

//fs in in-buit so i dont need to install i can directly use it, 
/*
const fs = require('fs');
fs.appendFile('notes.txt', 'paras is here' + '\n' , () => {console.log('notes.txt is created');});
const data = fs.readFileSync('notes.txt', 'utf-8');
console.log(data);

*/
//day2 5th,
const os = require('os');
console.log(os);