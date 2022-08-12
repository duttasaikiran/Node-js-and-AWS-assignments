var fs =  require('fs');

var myFile = fs.readFile('test.txt', 'utf8', function(err, data){
  console.log(data);
});
