import fs from "node:fs";
import { createServer } from "node:http";

let count = 0;

// Server side events (SSE)
const server = createServer((req, res) => {
  if (req.url === "/") {
     const htmlPage = fs.createReadStream("./stream.html");
     htmlPage.pipe(res)
  }  else if (req.url === "/stream") {
     res.writeHead(200, {
       "content-type": "text/event-stream",
       "cache-control": "no-cache",
       connection: "keep-alive"
     });

     setInterval(() => {
       res.write(`data: The Count is - ${count++} \n\n`)
     }, 1000)
  }
});

server.listen(3001, () => {
  console.log("Server listening on port http://localhost:3001");
});