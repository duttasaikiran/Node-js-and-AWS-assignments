const fs = require('fs');

const testFolder = 'C:\Users\BASAIKIR\OneDrive - Capgemini\Desktop\Node-js-and-AWS-assignments-main\Node-js-and-AWS-assignments-main\Node JS assignments/';


fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});
