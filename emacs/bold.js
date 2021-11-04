// [[file:../README.org::*Bold:][Bold::1]]

var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.org
turndownService.use(org)

var boldHtml = '<html> <head> <title>Bold text</title> </head> <body> <p>Use the strong element to <strong>indicate strongly emphasized</strong> content.</p> </body> </html>'

console.log(turndownService.turndown(boldHtml))
// Bold::1 ends here
