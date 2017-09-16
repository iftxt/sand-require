const sandModule = require('./sand-module')
var cache = {}

module.exports = (name) => {
  if (!cache[name]) cache[name] = sandModule(require(name))
  return cache[name]
}
