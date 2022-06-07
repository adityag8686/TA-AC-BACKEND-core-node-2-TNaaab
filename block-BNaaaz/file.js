let http = require("http");
let fs = require ("fs");

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    fs.createReadStream("./readme.txt").pipe(res);
}

server.listen( 3000, () =>{
    console.log("listening on 3000");
})