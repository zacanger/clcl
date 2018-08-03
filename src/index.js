const xdg = require('xdg-basedir')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const dbPath = xdg.data + 'clcl.json'
const adapter = new FileSync(dbPath)
const db = low(adapter)

db.defaults({ clcl: [] }).write()
