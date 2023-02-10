import chalk from 'chalk'
import conf from 'conf'
import utils from '../bin/utils.js'
import CLI from 'clui'
import clear from 'clear'

const Spinner = CLI.Spinner
const countdown = new Spinner('Initiating Reload ...  ', [
  '◜',
  '◠',
  '◝',
  '◞',
  '◡',
  '◟'
])

function reload () {
  process.stdout.write('\n')
  countdown.start()
  let number = 2

  setInterval(function () {
    number--
    countdown.message('Reloading allThingsOps CLI ...  ')
    if (number === 0) {
      ;('npm i -g')
      countdown.stop()
      process.stdout.write('\n')
      console.log(
        chalk.green.bold('Completed Reloading allThingsOps CLI ...  ')
      )
      process.exit(0)
    }
  }, 1000)
}

export default reload
