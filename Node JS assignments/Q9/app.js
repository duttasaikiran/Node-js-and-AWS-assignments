var fs = require('fs');

var text = fs.readFileSync('test.txt', 'utf8');
var arraytext = text.split('\n');
console.log(arraytext);
