var TurndownService = require('turndown')
var turndownPluginGfm = require('../lib/turndown-plugin-gfm.cjs')

var org = turndownPluginGfm.org
var turndownService = new TurndownService()
turndownService.use(org)
var html = '<p>The function <code><code>selectAll()</code></code> highlights all the text in the input field so the user can, for example, copy or delete the text.</p>'

console.log(turndownService.turndown(html))
