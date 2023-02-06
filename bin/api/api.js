#!/usr/bin/env node

import chalk from 'chalk'
import axios from 'axios'

const url = 'https://quotes.rest/qod'

function getAPI () {
  axios({
    method: 'get',
    url: url,
    headers: { Accept: 'application/json' } // this api needs this header set for the request
  })
    .then(res => {
      const quote = res.data.contents.quotes[0].quote
      const author = res.data.contents.quotes[0].author
      const log = chalk.green(`${quote} - ${author}`) // we use chalk to set the color green on successful response
      console.log(log)
    })
    .catch(err => {
      const log = chalk.red(err) // we set the color red here for errors.
      console.log(log)
    })
}

export default getAPI
