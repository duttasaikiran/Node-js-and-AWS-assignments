var fs = require('fs');

var readMe = fs.readFileSync('Q3', 'utf8' );

console.log(readMe.typeof());
