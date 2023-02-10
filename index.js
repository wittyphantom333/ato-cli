#! /usr/bin/env node
import chalk from 'chalk'
import boxen from 'boxen'
import conf from 'conf'
import figlet from 'figlet'
import clear from 'clear'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import { Command } from 'commander'
const program = new Command()

import { errorLog } from './bin/utils.js'
import Server from './bin/api/api.js'
import utils from './bin/utils.js'
import build from './bin/build.js'
import push from './bin/push.js'
import reload from './bin/reload.js'
import stats from './bin/stats.js'
import todo from './bin/todo.js'

let userName

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
  backgroundColor: '#555555'
}
const greeting = chalk.white.bold(
  'allThingsOps CLI,  2019-2023 All Rights Reserved'
)
const msgBox = boxen(greeting, boxenOptions)

const greet = async () => {
  const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Enter your name:'
  })

  userName = name
  clear()
  const msg = `Welcome ${userName}!`
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data))
  })
}

program
  .name('ato')
  .description('allThingsOps CLI')
  .allowExcessArguments(false)
  .allowUnknownOption()

program
  .command('build')
  .alias('b')
  .description('build the project')
  //.argument('<name>')
  .option('-d, --docker <tasks...>', 'Build a Dockerfile')
  .option('-n, --npm <tasks...>', 'Run npm install')
  .option('-b, --debug', 'Display some debugging')
  .action((options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options)
    }
    if (options.docker === undefined && options.npm === undefined) {
      errorLog('Please specify at least one task')
    }
    //const buildType = options.docker ? `${options.docker} ` : ''
    //console.log(`Thank-you ${buildType}${name}`)
  })

program.command('push').alias('p').description('push the project').action(push)

program
  .command('check')
  .alias('v')
  .description('show version')
  .action(() => {
    process.stdout.write('\n')
    console.log(
      figlet.textSync('  allThingsOps', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
      })
    )
    console.log(msgBox)
  })

program
  .command('reload')
  .alias('r')
  .description('reload the project')
  .action(reload)

program.command('stats').alias('s').description('show stats').action(stats)

program
  .command('login')
  //.alias('l')
  .description('login')
  .action(() => {
    greet()
  })

program
  .command('fivem')
  //.alias('a')
  .description('fivem')
  //.argument('<string>', 'API Argument')
  .option('-r, --request <string>', 'Return FiveM API Results')
  .option('-s, --ip <string>', 'IP_Address:Port')
  .option('-d, --debug', 'Display some debugging')
  .action((options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options)
    }
    if (!options.ip) {
       errorLog('Please specify IP and Port')
      return
    }
    const srv = new Server(options.ip)
    if (options.request === 'status'){
      srv.getServerStatus().then(data => console.log(data)) 
    }
    if (options.request === 'players'){
      srv.getPlayers().then(data => console.log(data)) 
      srv.getMaxPlayers().then(data => console.log(data)) 
    }
})

//program.command('fivem').alias('f').description('fivem').action(new Server('15.204.198.158:30120'))

//program.command('todo').alias('td').description('todo').action(todo)

program.parse(process.argv)
