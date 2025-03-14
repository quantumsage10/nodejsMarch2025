import fs from "node:fs/promises" 
import path from "node:path"

// for smaller files that's fine
export async function readFile(pathname) {
    const data = await fs.readFile(pathname, "utf-8")
    console.log(data)
    return data
}

export async function createFolder(foldername) {
     await fs.mkdir(foldername, {recursive: true})
     // console.log("folder has been created!")
}

export async function createFile(pathname, content = '') {   
     await fs.writeFile(pathname, content);
}

export async function writeToFile(pathname, content='') {
     await fs.appendFile(pathname, content)
}

export async function deleteFile(pathname) {
// synchronous function - main thread occupied
     await fs.unlink(pathname)
     console.log("File has been deleted!")
}

export async function deleteFolder(pathanme) {
     fs.rm(pathanme, { recursive: true, force: true }, (err) => {
          if (err) {
              console.error('Error deleting folder:', err);
              return;
          }
          console.log('Folder deleted successfully');
      });
}

export async function getFileInfo(filePath) {
     const stats = await fs.stat(filePath)
     return  {
        size: `${(stats.size / 1024).toFixed(2)} KB`,
        created: stats.birthtime.toLocaleString(),
        modified: stats.mtime.toLocaleString()
     }
}

export async function listItems(listPath = "./") {
     // current folder list
   const items = await fs.readdir(listPath, {withFileTypes: true})
   return items.map(item => {
      return {
          name: item.name,
          type: item.isDirectory() ? "folder" : "file",
          path: path.join(import.meta.dirname, item.name),
      }
   })

}

listItems();

// No top-level calls should be here - global scope calls
// const stats = getFileInfo("./hello.txt").then((data) => {
//      console.log("data", data)
// });

// console.log(stats);

// createFile("./hello.txt", "Hello Javascript! \n")
// createFolder('./contents/images/logos')
// readFile("./hello.txt")
// // getFileInfo("./hello.txt")
// deleteFile("./hello.txt")
// deleteFolder("./contents")