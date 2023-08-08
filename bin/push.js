import chalk from 'chalk'
import conf from 'conf'

function push(type) {
  console.log('Pushing ' + type + '...')
  execSync('git push origin' + type)
  console.log(chalk.green('Done!'))
}

export default push
