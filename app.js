const user = process.argv[2]

const hours = new Date().getHours() // get hours
console.log(hours)

function getGreetings(hours) {
if(hours < 4 || hours >= 19) return "Good night"
if(hours < 9) return "Good Morning"
if(hours < 16) return "Good Afternoon"
return "Good Evening"

}

const greetings = getGreetings(hours)
console.log(`${greetings}, ${user}! `)

// Export for CommonJS
module.exports = getGreetings;