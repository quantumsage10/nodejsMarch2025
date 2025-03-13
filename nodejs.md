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

