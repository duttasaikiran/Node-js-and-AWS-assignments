var fs = require('fs');

var myRead = fs.readFile('test.txt', 'utf8', function(err, data){
  console.log(data);
});
