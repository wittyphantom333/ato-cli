import os from 'node:os'
import clui from 'clui'

const Gauge = clui.Gauge

function stats () {
  let cpu = os.cpus().length
  let mem = os.freemem()
  console.log(new Gauge({ cpu, mem }))
}

export default stats
