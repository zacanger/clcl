module.exports = (idx, db) => {
  const all = db.get('clcl').value()
  const toRemove = all[idx]
  console.log(toRemove)
}
