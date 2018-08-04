const clip = require('clipboardy')

module.exports = (idx, db) => {
  const all = db.get('clcl').value()
  const ours = all[idx] || ''
  clip.writeSync(ours)
}
