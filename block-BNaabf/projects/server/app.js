console.log("../client/index.js");
console.log(__fileName)
let path = require("path");
let absolutePath = path.join(__dirname ,"..", '/client/index.js');
console.log(absolutePath);

let http = require("http");
let fs = require("fs");
let qs = require("querystring");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let store = "";

    req.on("data", (chunk) => {
        store += chunk;
    });
    req.on("end", () => {
        if (req.method === "GET" && req.url === "/form") {
            res.setHeader("Content-Type", "text/html");
            fs.createReadStream("./form.html").pipe(res);
    }

        if (req.method === "POST" && req.url === "/form") {
            let result = qs.parse(store);
            res.write(result.name);
            res.write(result.email);
            res.write(result.age);
            res.end();
        }
    });
}
server.listen(5678, "localhost", () => {
    console.log("server is running on the 5678 port ");
});