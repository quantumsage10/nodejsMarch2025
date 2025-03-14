> nodejs is a javascript runtime means an engine in which js coderuns/executes

# History

why nodejs ?
nodejs solves single thread problem & delegate/offload it's IO operations (async) to OS & never be out of thread 
apache has request per thread (not single thread) - can be out of thread

comparision of nodejs vs apache - nodejs is really fast

# REPL read-eval-print-loop
- just for experiment
- quick code without opening any file

```sh
node
.help
.exit
```

# Node in Terminal

```sh
node
node app.js
node app.js runi  # returns arguments of array
```

# Node real world code in a file/script

- vs code extension - code runner 

```js
// process
console.log(process)
console.log(process.argv) // reads & writes nodejs binary path & our file  path
console.log(process.argv[3])
```

## Module System

user defined module - cjs & esm
in nodejs module means file

## Inbuilt Module provided by nodejs

os module for computer cpu, memory, ram, threads

## Third Party Module - npm modules

- user defined modules are registered in npm 
- which genearlly refer to as package/library
- we need proper package.json to use npm modules

# Sync 

- one line executes after another line completion
- main thread blocking, nothing skips
- by default synchronous execution

# Async

- parallel execution
- main thread free , Non-Blocking, do not wait for execution
- async functions & callbacks are registered in queue
- few js inbuilt async modules/apis are - setTimeout(), setInterval()


### promises (easily readable)  - structured 

- main thread is always free
- second thread is working 
- in async/await functions -  second thread behave as a synchronous
- promise means will return something whether it's an error & success result
- promise introduced rescue from callback hell

promises syntax - etheir .then or async/await

✅ usecase/tradeons of promise - time isn't an issue & perfomance isn't an issue & only result is required 

💥 tradeoffs of promises
- more resources usage than callbacks
- more memory usage cuz behind the scene promise object creation 
- processing overhead (processing, tracking, monitoring)

### 🔮 Callbacks (Faster) - low latency 

- Lower memory usage (no extra event loop overhead)
- Faster execution (doesn't create additional microtasks)
- Better for real-time, high-frequency operations

✅ usecase/tradeons of callbacks - time is a issue(low latency) where every milliseconds is important 

💥 tradeoffs of callbacks
Callback Hell (difficult to maintain)
Harder error handling


# Shebang (#!) in Node.js Scripts Execution

```js
// It finds Node.js automatically, even if it’s installed in different locations
#!/usr/bin/env node
```

```json
// package.json
"bin": {
"fman": "./fileManager,js" 
},
```

```sh
# connect to fman 
npm link 
which fman
```

# Node Inbuilt Modules

## fs

- manage file system

## Readline

- taking input from terminal
- taking input from cli

## HTTP

- to create server
- server means who listens our request continously without explicitely stopping or crashing

# Stream

- File reading chunk by chunk, efficient for memory RAM

Why use streaming?
Faster Response → No need to wait for the full file to load.
Memory Efficient → Doesn’t load everything into RAM at once.
Handles Large Files → Can send large HTML files, videos, or logs without crashing the server.

# Server Sent Events

- 


# Exceptional Scenarios

for ultra-high-performance and mission-critical systems like healthcare, space exploration, and defense, raw callbacks or even lower-level programming with C++/Rust via Node.js bindings are often used

What Should Be Used?
✅ C++/Rust – For direct hardware interaction & real-time performance.
✅ Node.js (via C++/Rust bindings) – For fast API interfaces but not core logic.
✅ Raw Callbacks – When you need the fastest execution possible.
✅ WebAssembly (WASM) – When performance is critical in a browser or edge computing scenario.

# Errors

### Top-level Function Calls - Global Scope Function Call in a File

- in Node.js, code in a separate file(fspromise.js) is considered top-level within that file(fileManager.js) and executes immediately when the module is imported.
- means when you import a file, its top-level(function call in global scope) code becomes part of the main file's execution flow at that point.

### Refreshing VS Code is necessary to avoid caching

- Node Module Caching: When u import a module, Node.js caches it. If the module has changes, restarting the server is often required to see updates

- File Watcher Delays: VS Code may not immediately detect file changes, so a refresh (or saving the file properly) helps.

### Socket hung up

- might be request data faulty
- might be response data faulty