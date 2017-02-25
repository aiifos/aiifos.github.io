//require expressv
var express = require('express');
var path = require('path');

//create our router object
var router = express.Router();

//export our router
module.exports = router;

//route homepage
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../index.html'));
});

//route about page
router.get('/about', function(req,res){
    res.sendFile(path.join(__dirname, '../about.html'));
});

//route resume page
router.get('/resume', function(req,res){
    res.sendFile(path.join(__dirname, '../resume.html'));
});

//route resume page
router.get('/barrazaresume', function(req,res){
    res.sendFile(path.join(__dirname, '../barrazaresume.html'));
});

//route contact page
router.get('/contact', function(req,res){
    res.sendFile(path.join(__dirname, '../contact.html'));
});
