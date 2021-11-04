// [[file:../README.org::*Italic][Italic:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.orgItalic
turndownService.use(org)
var italicHTML = '<i>This text will be in italics</i>'

console.log(turndownService.turndown(italicHTML))
// Italic:1 ends here
