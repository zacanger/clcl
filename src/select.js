const clip = require('clipboardy')
const { removeAt } = require('./util')

module.exports = async (ix, db) => {
  const idx = parseInt(ix, 10)
  const all = db.get('clcl').value()
  const ours = all[idx] || ''
  await clip.write(ours)
  db.set('clcl', [ ours ].concat(removeAt(idx, all))).write()
}
