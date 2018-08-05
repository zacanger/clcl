const clip = require('clipboardy')
const { removeAt } = require('./util')

module.exports = (ix, db) => {
  const idx = parseInt(ix, 10)
  const all = db.get('clcl').value()
  const ours = all[idx] || ''
  db.set('clcl', [ ours ].concat(removeAt(idx, all))).write()
  clip.writeSync(ours)
}
