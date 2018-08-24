#!/usr/bin/env node

const xdg = require('xdg-basedir')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const take = require('zeelib/lib/take')
const clip = require('clipboardy')

const dbPath = xdg.data + '/clcl.json'
const adapter = new FileSync(dbPath)
const db = low(adapter)

const sync = () => {
  const contents = clip.readSync()
  const current = db.get('clcl').value()
  if (current[0] !== contents) {
    const marks = [ contents ].concat(current).filter(Boolean)
    const newVal = take(100, marks)
    db.set('clcl', newVal).write()
  }
}

setInterval(sync, 1000)
