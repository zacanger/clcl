const { format } = require('./util')

module.exports = (db) => {
  const all = db.get('clcl').value()
  console.log((all && all.length) ? format(all) : '')
}
