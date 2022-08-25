const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./inventory.js')
const Inventory = mongoose.model("inventory");

mongoose.connect('mongodb+srv://gabbar:gabbar@cluster0.nbst9.mongodb.net/Inventory');
app.use(bodyParser.json());

app.listen(8081, ()=>{
 console.log("now listening to port 8081");
})

//1a) To get all items in inventory

app.get('/inventory', (req, res)=>{
  Inventory.find().then((response)=>{
    res.json(response);
  }).catch(err=>{
    if(err){
      throw err;
    }
  })
})

//1b) To get particular item

app.get('/inventory/:name', (req, res)=>{
      Inventory.find(req.body.name).then((Fruit)=>{
        if(Fruit){
          res.json(Fruit);
        }
        else{
          res.send("invalid error");
        }
      }).catch((err)={
        if(err){
          throw err;
        }
      })

})

// 2b) To update particular item

app.put('/inventory/:id' , (req, res)=>{
  Inventory.findByIdAndUpdate({_id:req.params.id}, req.body).then(()=>{
    Inventory.findOne({_id:req.params.id}).then((fruit)=>{
      res.send(fruit);
    })
  })
})

// 3) To post item

app.post('/inventory', (req, res)=>{
      var newInventory ={
        name : req.body.name,
        quantity : req.body.quantity
      }

      var inventory1 = new Inventory(newInventory);

      inventory1.save().then(()=>{
         console.log("Item created in inventory");
      }).catch(err=>{
        if(err){
          throw err;
        }
      })
      res.send("Item created");
});



//4a) DELETE ALL ITEMS

app.delete('/inventory',(req, res)=>{
   Inventory.deleteMany().then(()=>{
     res.send("all items delted");
   }).catch(err=>{
     if(err){
       throw err;
     }
   })
})

//4b) Delete particular items

app.delete('/inventory/:name', (req, res)=>{
  Inventory.findByIdAndRemove(req.body.name).then((response)=>{
    if(response){
       res.send("Item is removed");
    }
    else{
      res.send("Item is not available to delete");
    }
  }).catch(err=>{
    if(err){
      throw err;
    }
  })
})
