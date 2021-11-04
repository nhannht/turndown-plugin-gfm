// [[file:../README.org::*Inline code][Inline code:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.orgInlineCode
turndownService.use(org)
var inlineCodeHTML = '<p>The function <code>selectAll()</code> highlights all the text in the input field so the user can, for example, copy or delete the text.</p>'

console.log(turndownService.turndown(inlineCodeHTML))
// Inline code:1 ends here
