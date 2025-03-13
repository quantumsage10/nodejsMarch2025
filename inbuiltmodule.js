import os from 'node:os'

// server monitoring system - htop , system monitor GUI

console.log('CPUS', os.cpus()) // cpus core
console.log('CPUS', os.cpus().length) // total cpus core = 8
console.log('Total Memory', os.totalmem() / (1024 * 1024 * 1024 ) ) // ram total GB
console.log('Free Memory', os.freemem() / (1024 * 1024)) // MB
console.log('Uptime', os.uptime() / (60 * 60)) // hours
console.log('Hostname', os.hostname()) 
console.log('User Info', os.userInfo())
console.log('Machine', os.machine()) // cpu architecture 