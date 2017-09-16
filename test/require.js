const test = require('tap').test
const sandRequire = require('../lib/')

test((t) => {
  const http = sandRequire('http')
  t.equal(http.STATUS_CODES['200'], 'OK')
  http.STATUS_CODES['200'] = 'notOK'
  t.equal(http.STATUS_CODES['200'], 'OK')
  delete http.STATUS_CODES['200']
  t.equal(http.STATUS_CODES['200'], 'OK')
  delete http.STATUS_CODES
  t.equal(http.STATUS_CODES['200'], 'OK')
  t.end()
})
