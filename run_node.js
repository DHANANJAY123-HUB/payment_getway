var express = require('express');
var app = express();
const cors=require("cors");
var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccavutil.js'),
    qs = require('querystring'),
    ccavReqHandler = require('./ccavRequestHandler.js'),
    ccavResHandler = require('./ccavResponseHandler.js');


app.use(cors());
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine','ejs');


app.get('/', function (req, res){
   res.render('dataFrom');
});

app.post('/ccavRequestHandler', function (request, response){
	ccavReqHandler.postReq(request, response);
	console.log('first req'+request)
});


app.post('/ccavResponseHandler', function (request, response){
        ccavResHandler.postRes(request, response);
});

app.listen(8005);
console.log('server started')
