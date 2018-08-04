const xdg = require('xdg-basedir')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const exit = require('zeelib/lib/exit')
const { args, hasFlag } = require('zrgs')

const dbPath = xdg.data + '/clcl.json'
const adapter = new FileSync(dbPath)
const db = low(adapter)

const usage = require('./usage')
const list = require('./list')
const remove = require('./remove')
const clear = require('./clear')
const select = require('./select')

db.defaults({ clcl: [] }).write()

const handleArgs = () => {
  const firstArg = args[0]
  const secondArg = args[1]
  if (!firstArg || hasFlag('help')) {
    usage()
  } else if (hasFlag('list')) {
    list(db)
  } else if (hasFlag('select')) {
    select(secondArg, db)
  } else if (hasFlag('remove')) {
    remove(secondArg, db)
  } else if (hasFlag('clear')) {
    clear(db)
  } else {
    usage()
    exit(1)
  }
}

module.exports = handleArgs()
