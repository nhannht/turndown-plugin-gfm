// [[file:../README.org::*Horizon Rule][Horizon Rule:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.orgHorizoneRule
turndownService.use(org)
var hrHTML = 'The <hr> tag in HTML stands for horizontal rule and is used to insert a horizontal rule or a thematic break in an HTML page to divide or separate document sections. The <hr> tag is an empty tag and it does not require an end tag.'

console.log(turndownService.turndown(hrHTML))

// Horizon Rule:1 ends here
