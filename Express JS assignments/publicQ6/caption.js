const express = require('express');

const app = express();

app.use(express.static('PublicQ6'));

app.listen(3000, () => {
    console.log('listening at port 3000');
});

app.get('/', (req, res)=>{
  res.render('index.html')
})
