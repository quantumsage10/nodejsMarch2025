import fs from "node:fs"

// main thread is free in async function , second thread is working
// promises will return something whether it's an error or success result
async function createFile(pathname) {
    try {
         console.log("File Writing starts")
         await fs.writeFile(pathname, "Hello Nodejs!\n") // block second thread
         await fs.appendFile(pathname, "Hello javascript!\n") // block second thread
    } catch (error) {
        console.log('err', err)
    }// block second thread
     console.log("File Written!")
}

createFile("./promise.md")