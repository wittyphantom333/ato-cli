import chalk from 'chalk'
// sleep functions
function msleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n)
}
function sleep(n) {
  msleep(n * 1000)
}

// used to log errors to the console in red color
function errorLog(error) {
  const eLog = chalk.red(error)
  console.log(eLog)
}

export default { sleep, msleep, errorLog }
//export { sleep }
//export { msleep }
//export { errorLog }
