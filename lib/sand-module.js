const handler = require('./handler')

const sandModule = (module) => {
  return new Proxy({}, {
    get (target, name) {
      return new Proxy(module, handler(name, module))
    },
    set: () => { return true },
    deleteProperty: () => { return true }
  })
}

module.exports = sandModule
