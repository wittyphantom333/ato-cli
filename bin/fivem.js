#!/usr/bin/env node
import chalk from 'chalk'
import { errorLog, sleep, msleep } from './utils.js'
import Server from './api/api.js'

const args = process.argv
const commands = ['status', 'players', 'resources', 'help']

const srv = new Server('15.204.198.158:30120')

// usage represents the help guide
const usage = function () {
  const usageText = `
fivem helps you manage your fivem server.

usage:
  fivem <command>

  commands can be:

    players: Number of players online: (number)
    online: List all players in an array: (string)
    resources: Get resource names of all server resources: (string/array)
    status: Get the whole server object: (string)
    help: Show this help guide: (string)
`

  console.log(usageText)
}

function fivem (args) {
  switch (args) {
    case 'help':
      usage()
      break
    case 'status':
      getServerStatus()
      break
    case 'players':
      getPlayers()
      break
    case 'resources':
      getResources()
      break
    default:
      errorLog('invalid command passed')
      usage()
  }
}

function getPlayers () {
    srv.getPlayers()
       .then(data => {
            console.log(chalk.green(data))
        })
       .catch(err => {
            errorLog(err)
        })
}

function getResources () {
    srv.getResources()
      .then(data => {
            console.log(chalk.green(data))
        })
      .catch(err => {
            errorLog(err)
        })
}

function getServerStatus () {
    srv.getServerStatus()
     .then(data => {
            console.log(chalk.green(data))
        })
     .catch(err => {
            errorLog(err)
        })
}

export default fivem