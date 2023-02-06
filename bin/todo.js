#!/usr/bin/env node
import { errorLog, sleep, msleep } from './utils.js'
import chalk from 'chalk'
import rl from 'readline'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// File path
const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'db.json')

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

db.data ||= { posts: [] }

const args = process.argv
const commands = ['new', 'get', 'complete', 'help']

// usage represents the help guide
const usage = function () {
  const usageText = `
todo helps you manage you todo tasks.

usage:
  todo <command>

  commands can be:

  new:      used to create a new todo
  get:      used to retrieve your todos
  complete: used to mark a todo as complete
  help:     used to print the usage guide
`

  console.log(usageText)
}

function todo (args) {
  switch (args[2]) {
    case 'help':
      usage()
      break
    case 'new':
      newTodo()
      break
    case 'get':
      getTodos()
      break
    case 'complete':
      completeTodo()
      break
    default:
      errorLog('invalid command passed')
      usage()
  }
}

function prompt (question) {
  const r = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })
  return new Promise((resolve, error) => {
    r.question(question, answer => {
      r.close()
      resolve(answer)
    })
  })
}

function newTodo () {
  const q = chalk.blue('Type in your todo\n')
  prompt(q).then(todo => {
    console.log(todo)
  })
}

function getTodos () {
  const todos = db.get('todos').value()
  let index = 1
  todos.forEach(todo => {
    let todoText = `${index++}. ${todo.title}`
    if (todo.complete) {
      todoText += ' ✔ ️' // add a check mark
    }
    console.log(chalk.strikethrough(todoText))
  })
  return
}

function completeTodo () {
  // check that length
  if (args.length != 4) {
    errorLog('invalid number of arguments passed for complete command')
    return
  }

  let n = Number(args[3])
  // check if the value is a number
  if (isNaN(n)) {
    errorLog('please provide a valid number for complete command')
    return
  }

  // check if correct length of values has been passed
  let todosLength = db.get('todos').value().length
  if (n > todosLength) {
    errorLog('invalid number passed for complete command.')
    return
  }

  // update the todo item marked as complete
  db.set(`todos[${n - 1}].complete`, true).write()
}

export default todo
