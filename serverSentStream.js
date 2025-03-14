import { createServer } from "node:http";

let count = 0;

// Server side events (SSE)
const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*" // CORS support
    });

    // continous streaming on
    setInterval(() => {
     res.write(`data: The count is - ${count++} \n\n`);
    }, 1000);
  } 
});

server.listen(3001, () => {
  console.log("Server listening on port http://localhost:3001");
});