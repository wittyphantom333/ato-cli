import chalk from 'chalk'
import conf from 'conf'

function build({ type }) {
  console.log('Checking ' + type + '...')
  if (type == 'docker') {
    console.log(chalk.green('Building Docker image...'))
    execSync('docker build -t' + conf.get('docker.image') + '.')
    console.log(chalk.green('Docker image built!'))
  }
}

export default build
