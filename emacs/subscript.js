// [[file:../README.org::*Subscript][Subscript:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.orgSubscript
turndownService.use(org)
var subScriptHTML = '<p>This text contains <sub>subscript</sub> text.</p>'

console.log(turndownService.turndown(subScriptHTML))

// Subscript:1 ends here
