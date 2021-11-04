// [[file:../README.org::*Table][Table:1]]
var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')
var turndownService = new TurndownService()
var org = turndownPluginGfm.org
turndownService.use(org)
const tableHTML = '<table> <thead> <tr> <th>header1</th> <th>header2</th> <th>header3</th> </tr> </thead> <tbody> <tr> <td>text1.1</td> <td>text1.2</td> <td>text1.3</td> </tr> <tr> <td>text2.1</td> <td>text2.2</td> <td>text2.3</td> </tr> <tr> <td>text3.1</td> <td>text3.2</td> <td>text3.3</td> </tr> <tr> </tr> </tbody> </table>'

console.log(turndownService.turndown(tableHTML))
// Table:1 ends here
