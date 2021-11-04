// [[file:../README.org::*Superscript][Superscript:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.orgSuperscript
turndownService.use(org)
var superScripttHTML = 'Hello<sup>This is a superscript</sup>'

console.log(turndownService.turndown(superScripttHTML))

// Superscript:1 ends here
