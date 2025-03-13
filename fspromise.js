import fs from "node:fs/promises"

// for smaller files that's fine
async function readFile(pathname) {
    const data = await fs.readFile(pathname, "utf-8")
    console.log(data)
    return data
}

async function createFolder(foldername) {
     await fs.mkdir(foldername, {recursive: true})
     console.log("folder has been created!")
}

async function createFile(pathname, content = '') {
     await fs.writeFile(pathname, content)
     console.log("File has been created!")
}

async function writeToFile(pathname, content='') {
     await fs.appendFile(pathname, content)
}

async function deleteFile(pathname) {
// synchronous function - main thread occupied
     await fs.unlink(pathname)
     console.log("File has been deleted!")
}

async function getFileInfo(filePath) {
     const stats = await fs.stat(filePath)
     return  {
        size: `${(stats.size / 1024).toFixed(2)} KB`,
        created: stats.birthtime.toLocaleString(),
        modified: stats.mtime.toLocaleString()
     }
}

const stats = getFileInfo("./hello.txt").then((data) => {
     console.log("data", data)
});

console.log(stats);

createFile("./hello.txt", "Hello Javascript! \n")
readFile("./hello.txt")
getFileInfo("./hello.txt")
createFolder('./contents/images/logos')
// deleteFile("./hello.txt")