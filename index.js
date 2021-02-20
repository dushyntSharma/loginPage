var express = require('express');
var http = require('http');
//var http = require('url');
//var http = require('http');
var app = express();
var port = process.env.port || 8080;
app.use(express.static(__dirname + '/'));
app.use(express.json());
app.get('/', (req, res) => res.sendFile('/index.html'));

var server = http.createServer(app);
server.listen(port, () => console.log('Asset Naming Assistant Running on : ', port));

app.get('/testEndPoint', function (req, res) {
    var response = {
        "response": "Asset Naming Assistant is running"
    };
    res.json(response);
});