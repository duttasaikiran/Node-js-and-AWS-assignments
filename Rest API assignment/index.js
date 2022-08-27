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

app.get('/inventory/:id', (req, res)=>{
  Inventory.findById(req.params.id).then((item)=>{
        if(item){
          res.json(item);
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
      // var newInventory ={
      //   name : req.body.name,
      //   quantity : req.body.quantity
      // }
      //
      // var inventory1 = new Inventory(newInventory);
      //
      // inventory1.save().then(()=>{
      //    console.log("Item created in inventory");
      // }).catch(err=>{
      //   if(err){
      //     throw err;
      //   }
      // })
      // res.send("Item created");
   Inventory.create(req.body).then((fruit)=>{
     res.send(fruit);
   }).catch (err=>{
     if(err){
       res.send({error:err.message});
     }
   })
   }


);



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

app.delete('/inventory/:id', (req, res)=>{
  Inventory.findByIdAndRemove(req.params.id).then((response)=>{
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
