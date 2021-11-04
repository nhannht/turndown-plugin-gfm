// [[file:../README.org::*Image][Image:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.orgImage
turndownService.use(org)

const imageHTML = '<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">'

console.log(turndownService.turndown(imageHTML))
// Image:1 ends here
