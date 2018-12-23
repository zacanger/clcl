const clip = require('clipboardy')

module.exports = async (db) => {
  await clip.write('')
  db.set('clcl', []).write()
}
