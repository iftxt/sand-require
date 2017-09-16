# sand-require [![Build Status](https://travis-ci.org/iftxt/sand-require.svg)](https://travis-ci.org/iftxt/sand-require)
require modules as sandboxed objects

## What
To treat the required module as a sandboxed object, you need to avoid passing by reference somehow. There are two ways to do that. That's deep-copying or overwriting the setter of the module object. This `sand-require` realizes the latter. The object created through the sand-require is an object that internally generates a recursive Proxy object and allows only the getter call.

## Installation
```console
$ npm install --save sand-require
```

## Quick example
```js
const sandRequire = require('../lib/')
const http = sandRequire('http')

console.log(http.STATUS_CODES['200'])
// => OK

delete http.STATUS_CODES // nothing happens
console.log(http.STATUS_CODES['200'])
// => OK
```
