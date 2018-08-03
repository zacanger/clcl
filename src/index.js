const xdg = require('xdg-basedir')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const exit = require('zeelib/lib/exit')
const { args, hasFlag } = require('zrgs')

const dbPath = xdg.data + '/clcl.json'
const adapter = new FileSync(dbPath)
const db = low(adapter)

const usage = () => console.log(`
  (nothing yet implemented)
  clcl -h      # print help
  clcl -l      # list all
  clcl -s [n]  # select entry at index n
  clcl -r [n]  # remove entry at index n
  clcl -c      # clear all
`)

db.defaults({ clcl: [] }).write()

const handleArgs = () => {
  usage()
  exit(0)
  // TODO:
  const firstArg = args[0]
  if (!firstArg || hasFlag('help')) {
    usage()
    exit(0)
  } else if (hasFlag('list')) {
    // handle
  } else if (hasFlag('select')) {
    // handle
  } else if (hasFlag('remove')) {
    // handle
  } else if (hasFlag('clear')) {
    // handle
  } else {
    usage()
    exit(1)
  }
}

module.exports = handleArgs()
