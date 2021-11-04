// [[file:../README.org::*Strikethrough][Strikethrough:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.orgStrikeThrough
turndownService.use(org)
var strikethroughHTML = '<p><strike>Hello WWorld</strike></p>'
var strikethroughHTML2 = '<p><del>Hello WWorld</del></p>'

console.log(turndownService.turndown(strikethroughHTML))
console.log(turndownService.turndown(strikethroughHTML2))
// Strikethrough:1 ends here
