const recursiveCall = (keys, obj) => {
  keys = keys.split('.')
  if (keys.length === 1) return obj[keys[0]]
  const key = keys.splice(0, 1)[0]
  return recursiveCall(keys.join('.'), obj[key])
}

module.exports = recursiveCall
