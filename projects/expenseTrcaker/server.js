import {createServer} from "node:http";
import fs from "node:fs"
import fsPromises from "node:fs/promises"

// iprep.ai website created purely on nodejs

const server = createServer(async(req, res) => {
  // Routing
  if (req.url === '/') {
     console.log('req url: "/"')
      res.writeHead(200, {'content-type': "text/html"})
     //  const data = await fs.readFile("./index.html")
     //  res.end(data)

     // data coming & storing in chunks , no memory issue
     const dataStream = fs.createReadStream("./index.html");
     // connecting reading & writing
     dataStream.pipe(res)

     //  dataStream.on("data", (chunk) => {
     //      // writeble stream
     //       res.write(chunk)
     //  })

     //  dataStream.on("end", () => {
     //       res.end()
     //  })

   
  } else if (req.url === "/about") {
     console.log("req url: '/about'")
     res.writeHead(200, {"content-type": "text/html"})
     res.end("<h1>This is your about page!</h1>") // can send html, json or file
  } else if (req.url === "/expenses") {
      // Apis
      // Create an expense
      // Post 

      if (req.method === "POST") {
           // read data from request
           let buff = ''
          // data sending start
           req.on('data', (chunk) => {
            console.log("chunk", chunk)
            buff = buff + chunk.toString()
           })
           // data sending complete
           req.on("end", async () => {
           // Store it in fake json database
            const data = await fsPromises.readFile("./db.json")
            const dbData = JSON.parse(data)
            dbData.push(JSON.parse(buff)) // json data convert to jsob

            // again store file
            await fsPromises.writeFile('./db.json', JSON.stringify(dbData, null, 2))

            res.end("OK")
           })
      } else if (req.method === "GET") {
           // read data from json db
           const data = await fsPromises.readFile("./db.json")
           res.end(data)
           // return the data to client
      }
  }
})

server.listen(3003, () => {
     console.log("Server is listening on port 3003")
})