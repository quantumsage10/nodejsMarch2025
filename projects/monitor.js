// activity monitor: stats of computer OS

import chalk from "chalk"
import os from "node:os"

function monitor() {
	//  console.log('monitoring...')

	// take a snapshot
	// take another snapshot

	const oldCpus = os.cpus()

	//  console.log('old', oldCpus)

	setTimeout(() => {
		const newCpus = os.cpus()
		const usage = newCpus.map((cpu, i) => {
			return {
				core: i,
				usage: calculateCPU(oldCpus[i], newCpus[i]) + "%",
			}
		})
		console.clear()
		console.log(chalk.bgMagentaBright(`=======System Stats=======`))
		console.table(usage) // show in single table, remove prev
		// console.log(usage)

		const usedMemory = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024)

		// console.log(
		//     "Memory used:",
		// 	usedMemory > 7
		// 		? chalk.redBright(
		// 				`${usedMemory.toFixed(2)} GB / ${
		// 					os.totalmem() / (1024 * 1024 * 1024).toFixed(2)
		// 				} GB`
		// 		  )
		// 		: chalk.greenBright(
		// 				`${usedMemory.toFixed(2)} GB / ${
		// 					os.totalmem() / (1024 * 1024 * 1024).toFixed(2)
		// 				} GB`
		// 	)
		// )
	}, 1000)
}

function calculateCPU(oldCpus, newCpus) {
	// ALgorithm

	const cpuTimes = oldCpus.times
    const values = Object.values(oldCpus.times)

	const oldTotal = Object.values(oldCpus.times).reduce((a, b) => a + b)

    const newCpuTimes = newCpus.times
	const properties = Object.values(newCpus.times)

	const newTotal = Object.values(newCpus.times).reduce((a, b) => a + b)

	const idle = newCpus.times.idle - oldCpus.times.idle
	const total = newTotal - oldTotal
	const used = total - idle

	const result = ((100 * used) / total).toFixed()
    

	return result
}

setInterval(monitor, 1000)