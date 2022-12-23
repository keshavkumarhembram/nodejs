const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is short history");
  }
  res.end(
    `
      <h1>Opps!</h1>
      <p>What ever you are searching it is not here</p>
    `
  );
});

server.listen(3000);
