const recursiveCall = require('./recursive-call')
const sandModule = require('./sand-module')

const handler = (keys, module) => {
  return {
    get (target, name) {
      if (target[name] === 'object') {
        if (keys) keys += '.' + name
        return sandModule(module[name], handler(keys, module))
      }
      return recursiveCall(keys + '.' + name, module)
    },
    set: () => { return true },
    deleteProperty: () => { return true }
  }
}

module.exports = handler
