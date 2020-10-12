var express = require('express');
var router = express.Router();

//Get home page
router.get('/',function(req, res, next){
    res.render('index', {
      title: 'Index'
      
    });
});
router.get('/home',function(req, res, next){
  res.render('index', {
    title: 'Index'
    
  });
});

module.exports = router;
