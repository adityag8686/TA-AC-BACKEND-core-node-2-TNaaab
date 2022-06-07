let http = require("http");
var server = http.createServer(handleRequest);

var qs = require("querystring");

function handleRequest(req, res) {
    let store = "";
    req.on("data", (chunk) => {
    store += chunk;
    });

    req.on("end", () => {
    if (req.method === "POST" && req.url === "/form") {
        let result = qs.parse(store);
        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    }
    if (req.method === "POST" && req.url === "/json") {
        console.log(store);
        res.setHeader("Content-Type", "application/json");
        res.end(store);
    }
    });
}
server.listen(7000, "localhost", () => {
    console.log("server is running on port 7k");
});