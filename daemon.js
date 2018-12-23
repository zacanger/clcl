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
  const clipboardContents = clip.readSync()
  const existingItems = db.get('clcl').value()
  console.log({ clipboardContents, existingItems })
  if (!existingItems || existingItems[0] !== clipboardContents) {
    const allItems = [ clipboardContents ].concat(existingItems).filter(Boolean)
    const newDb = take(100, allItems)
    db.set('clcl', newDb).write()
  }
}

setInterval(sync, 1000)
