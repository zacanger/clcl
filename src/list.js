const format = (list) =>
  list.reduce((p, c, i) => `${p}\n${i}: ${(c || '').trim()}`, '').trim()

module.exports = (db) => {
  const all = db.get('clcl').value()
  if (!all || !all.length) {
    console.log('')
  } else {
    console.log(format(all))
  }
}
