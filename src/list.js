const pj = require('prettyjson')

module.exports = (db) => {
  const all = db.get('clcl').value()
  if (!all || !all.length) {
    console.log('')
  } else {
    console.log(pj.render(all))
  }
}
