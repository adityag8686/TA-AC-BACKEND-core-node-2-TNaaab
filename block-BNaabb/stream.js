let http = require ("http");

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    let store = "";
    req.on("data" , (chunk) =>{
        store = store + chunk;
    })
    req.end("end" , () => {
        res.write(data);
        res.end();
    });
}

server.listen(3000, "localhost", () => {
    console.log("server is listening at 3000 port");
  });