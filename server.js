const http = require("http");
const Buffer = require("buffer").Buffer;

const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);

  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Violation Server\n");
  }

  if (req.method === "POST" && req.url === "/violation") {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body);
        const floatValue = body.readFloatBE(0);
        const hexString = body.toString("hex");
        console.log(`Received binary float: ${hexString}`);
        res.statusCode = 200;
        res.end();
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
