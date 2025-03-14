#!/usr/bin/env node

import chalk from "chalk"
import { stdin, stdout } from "node:process";
import * as readline from "node:readline/promises"
import { createFile, createFolder, deleteFile, deleteFolder, listItems } from "../fspromise.js";

// taking input from terminal & showing output in terminal
const rl = readline.createInterface({
     input: stdin,
     output: stdout
})

async function menu() {
     console.clear()
     console.log(chalk.blue.bold(`\n🗂️  File system manager`))

     const options = [
        'Create Folder',
        'Create File',
        'Write to File',
        'Delete a File',
        'Delete a Folder',
        'List Items',
        'Exit'
     ]

     options.forEach( (option, i) => {
         console.log(chalk.yellow(`${i + 1}`) + chalk.white(` ${option}`))
     })

     const answer = await rl.question(chalk.cyan("\n Select option: ") ) 

     switch(answer) {
          case "1":
               const folderPath = await rl.question(chalk.cyan("Folder path: "))
               await createFolder(folderPath)
               console.log(chalk.green("✅ Folder created"));
               break;
          case "2":
               const filePath = await rl.question(chalk.cyan("File path:"))
               const initialContent = await rl.question(chalk.cyan("Initial content:"))
               await createFile(filePath, initialContent)
               console.log(chalk.green("✅ File created!"))
               break;
          case "3":
               const appendFilePath = await rl.question(chalk.cyan("File path: "))
               const appendContent = await rl.question(chalk.cyan("Initial content:"))
               await createFile(appendFilePath, appendContent);
               console.log(chalk.green("✅ File content added!"))
               break;
          case "4":
               const deleteFilePath = await rl.question(chalk.cyan("File to delete: "))
               await deleteFile(deleteFilePath)
               console.log(chalk.green("✅ File deleted!"))
               break;
          case "5":
               const deleteFolderPath = await rl.question(chalk.cyan("Folder to delete: "))
               await deleteFolder(deleteFolderPath)
               console.log(chalk.green("✅ File deleted!"))
               break;
          case "6":
               const listPath = await rl.question(chalk.cyan("Folder path (Enter for current): "))
               const items = await listItems(listPath || "./")
               console.log(chalk.blue("\nContents"))
               items.forEach(item => {
                    const icon = item.type === 'folder' ? '📁' : '📄'
                    console.log(`${icon} ${chalk.yellow(item.name)} ${item.path}`)
               })
               break;
          case "7":
               rl.close();
               return;

          default: 
               console.log(chalk.red("⚠️ Invalid Option"))     
     }

     await rl.question(chalk.gray('\nPress ENTER to continue...'))
    // recursive to stay in loop
     menu()
}

// Run menu and handle top-level errors
menu().catch(error => {
     console.error(chalk.red("❌ Error: " + error.message));
     rl.close();
});