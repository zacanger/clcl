const { version } = require('../package.json')

const s = `
  clcl v${version}

  clcl -h      # print help
  clcl -l      # list all
  clcl -s [n]  # select entry at index n
  clcl -r [n]  # remove entry at index n
  clcl -c      # clear all
`

module.exports = () => console.log(s)
