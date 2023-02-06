import chalk from 'chalk'
import conf from 'conf'

function build ({ type }) {
  console.log('Checking ' + type + '...')
  if (type == 'docker') {
    console.log(chalk.green('Building Docker image...'))
  }
}

export default build
