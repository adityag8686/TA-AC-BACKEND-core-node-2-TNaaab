var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');

console.log(__filename);
console.log(__dirname + '/app.js');
console.log('/index.html');
var requiredPath = path.join(__dirname, '/index.html');
console.log(requiredPath);

var server = http.createServer(handleRequest);


function handleRequest(req, res) {
    let path = url.parse(req.url);
    let pathname = path.pathname;
    let datatype = req.headers['content-type'];
    var store = '';
  
    if (req.method === 'POST' && pathname === '/') {
        req.on('data', (chunk) => {
        store += chunk;
        });
        req.on('end', () => {
        if (datatype === 'application/json') {
            let data = JSON.parse(store);
            res.statusCode = 201;
            res.end(`<h1>${data.name}</h1> <h2>${data.email}</h2>`);
        } else if (datatype === `application/x-www-form-urlencoded`) {
            let data = qs.parse(store);
            res.statusCode = 201;
            res.end(JSON.stringify(data));
        }
        });
    }
}

server.listen(9000, () => {
    console.log('Port is listening on port 9000');
});