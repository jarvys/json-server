#!/usr/bin/env node
var minimist       = require('minimist')
var updateNotifier = require('update-notifier')
var cli            = require('../src/cli')

var notifier = updateNotifier({packagePath: '../package'})
if (notifier.update) notifier.notify()

var argv = minimist(process.argv.slice(2), {
    boolean: ["silent"],
    alias: {
        'p': 'port',
        's': 'silent'
    },
    default: {
        silent: false
    }
})

cli.run(argv)
