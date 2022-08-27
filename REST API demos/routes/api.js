const express = require('express');

const router = express.Router();
const Ninja = require('../models/ninja')

router.get('/ninjas', function(req, res){
  res.send({type: 'GET'});
});

router.post('/ninjas', function(req, res){
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);});
  });

router.put('/ninjas/:id', function(req, res){
  res.send({type: 'GET'});
})

router.delete('/ninjas/:id', function(req, res){
  res.send({type: 'GET'});
})

module.exports = router;
