import {createServer} from "node:http";
import fs from "node:fs/promises"

// iprep.ai website created purely on nodejs

const server = createServer(async(req, res) => {
  // Routing
  if (req.url === '/') {
     console.log('req url: "/"')
      res.writeHead(200, {'content-type': "text/html"})
      const data = await fs.readFile("./index.html")
      res.end(data)
  } else if (req.url === "/about") {
     console.log("req url: '/about'")
     res.writeHead(200, {"content-type": "text/html"})
     res.end("<h1>This is your about page!</h1>") // can send html, json or file
  } 
})

server.listen(3003, () => {
     console.log("Server is listening on port 3003")
})