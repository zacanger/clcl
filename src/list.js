const format = (list) =>
  list.reduce((p, c, i) => `${p}\n${i}: ${(c || '').trim()}`, '').trim()

module.exports = (db) => {
  const all = db.get('clcl').value()
  console.log((all && all.length) ? format(all) : '')
}
