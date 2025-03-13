import * as fs from "node:fs"

function createFile(pathname, pathname2, pathname3, pathname4) {
   // Synchronously replacing file content
   fs.writeFileSync(pathname, "Hello Nodejs!")
   fs.writeFileSync(pathname, "Hello Javascript!")

   // Synchronously adding file content
   fs.appendFileSync(pathname2, "Hello Nodejs!\n")
   fs.appendFileSync(pathname2, "Hello Javascript!\n")

  // Error first callbacks ( first parameter is err)
 // Asynchroniusly replacing file content
  fs.writeFile(pathname3, "Hello Nodejs!\n", (err) => {
     if (err) {
         console.log("Something went wrong while creating file.")
         return
     }
        console.log("File has been created asynchronously.")
  })

  // Asynchronously
  fs.appendFile(pathname4, "Hello Nodejs!\n", (err) => {
     if (err) {
         console.log("Soemthing went wrong while creating file.")
         return
     }
        console.log("file has been created asynchronously.")
  })
        console.log("File has been created!")
}

createFile("./hello.md", "./append.md", "./asyncreplace.md")