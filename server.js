var fs = require('fs');
var os = require('os');

var user = os.userInfo('os');
console.log(user.username);