var fs = require('fs');
fs.writeFileSync('test.txt', "Hey ho , let's go !");
var myFile = fs.readFileSync('test.txt', 'utf8');
console.log('Your file was saved !')
console.log(myFile);
