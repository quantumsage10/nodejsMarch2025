import {createServer} from "node:http";

// iprep.ai website created purely on nodejs

const server = createServer((req, res) => {
     console.log("Request received...")
     res.writeHead(200, {"content-type": "text/html"})
     res.end("<h1>Hello from Node Js Server!</h1>") // can send html, json or file
})

server.listen(3003, () => {
     console.log("Server is listening on port 3003")
})

