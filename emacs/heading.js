// [[file:../README.org::*Heading][Heading:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.orgHeading
turndownService.use(org)
var headingHTML = "<h1>I'm the biggest heading</h1> <h2>I'm smaller than h1</h2> <h3>I'm smaller than h2</h3> <h4>I'm smaller than h3</h4> <h5>I'm smaller than h4</h5> <h6>I'm the smallest heading</h6>"

console.log(turndownService.turndown(headingHTML))
// Heading:1 ends here
