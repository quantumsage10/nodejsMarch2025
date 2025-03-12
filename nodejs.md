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


