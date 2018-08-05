const removeAt = (idx, all) =>
  all.filter((_, i) => i !== idx, 10)

const format = (list) =>
  list.reduce((p, c, i) => `${p}\n${i}: ${(c || '').trim()}`, '').trim()

module.exports = {
  format,
  removeAt
}
