#!/usr/bin/env node

const exit = require('zeelib/lib/exit')

if (module.parent) {
  console.error('clcl is a command-line program.')
  exit(1)
}

require('./src')
