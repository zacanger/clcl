module.exports = (ix, db) => {
  const idx = parseInt(ix, 10)
  const all = db.get('clcl').value()
  db.set('clcl', all.filter((_, i) => i !== idx)).write()
}
