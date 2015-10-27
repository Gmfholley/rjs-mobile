var express = require('express');
var path = require('path');
var router = express.Router();
var cheerio = require('cheerio');
var xmlHttp = require('xmlhttprequest').XMLHttpRequest;
 //   $ = cheerio.load('<h2 class="title">Hello world</h2>');

//$('h2.title').text('Hello there!');
//$('h2').addClass('welcome');

//$.html();
/* GET home page. */
router.get('/', function(req, res, next) {
	//res.setHeader('Content-Type', 'application/html');
	//res.send(JSON.stringify({a: 1}));
    //res.render('index', { title: 'Express' });
   //xhr.send();
   // console.log('Time');
    var xhr = new xmlHttp();
    xhr.open('get', 'http://as400.farmers-national.com:1080/IMAGESERVER/DOC104R?action=Search', true);
    next();
}, function(req, res, next){

	next();
}, function(req, res, next){
	res.sendFile(path.join(__dirname + '/../views/plain.html'));	
});

module.exports = router;
