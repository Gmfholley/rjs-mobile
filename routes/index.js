var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
//	res.setHeader('Content-Type', 'application/html');
	//res.send(JSON.stringify({a: 1}));
    //res.render('index', { title: 'Express' });
	res.sendFile(path.join(__dirname + '/../views/plain.html'));
});

module.exports = router;
