var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

var port = 443, index = fs.readFileSync('./index.html');

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./certificate.pem'),
};

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

function getRandomString(length){
	result = '';
	while(length-->0)
		result += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"[getRandomInt(62)];
	return result;
}

var app = express();

var server = https.createServer(options, app).listen(port);

app.get('/', function (req, res) {
    res.writeHead(200);
    res.end(`<yourflag>The key you are searching for will be here  ----->${getRandomString(20)}<-----</yourflag>\n\nPress F5 to get new flag`);
});
