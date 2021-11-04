// [[file:../README.org::*Highlight][Highlight:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.orgHighlight
turndownService.use(org)
var highlightHTML = '<p>Do not forget to buy <mark>milk</mark> today.</p>'

console.log(turndownService.turndown(highlightHTML))
// Highlight:1 ends here
