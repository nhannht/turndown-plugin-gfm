var TurndownService = require('turndown')
var turndownPluginGfm = require('@nhannht/turndown-plugin-gfm')

var org = turndownPluginGfm.org
var turndownService = new TurndownService()
turndownService.use(org)
var code = turndownService.turndown('<pre><code>Hello world!</code></pre>')
console.log(code)
var unorderlist = turndownService.turndown('<ol>\n' +
  '<li>First</li>\n' +
  '<li>Second</li>\n' +
  '<li>Third</li>\n' +
  '</ol>')
console.log(unorderlist)
var img = "<img loading='lazy' align='left' src='https://jp.searchpreview.de/preview?s=https://orgmode.org&amp;ua=Chrome&amp;ver=1036&amp;opts=1-1' width='111' height='82' style='width: 111px; height: 82px; background-position: center center; background-repeat: no-repeat; border: 1px solid rgb(187, 187, 188); margin: 0px 5px 3px 0px;'>"
console.log(turndownService.turndown(img))
var img2 = "<a href='https://Checkboxes.html'>Checkboxes</a>"
console.log(turndownService.turndown(img2))

var table = '<table>\n' +
  '  <thead>\n' +
  '    <tr>\n' +
  '      <th>header1</th>\n' +
  '      <th>header2</th>\n' +
  '      <th>header3</th>\n' +
  '    </tr>\n' +
  '   </thead>\n' +
  '   <tbody>\n' +
  '     <tr>\n' +
  '       <td>text1.1</td>\n' +
  '       <td>text1.2</td>\n' +
  '       <td>text1.3</td>\n' +
  '     </tr>\n' +
  '     <tr>\n' +
  '       <td>text2.1</td>\n' +
  '       <td>text2.2</td>\n' +
  '       <td>text2.3</td>\n' +
  '     </tr>\n' +
  '     <tr>\n' +
  '       <td>text3.1</td>\n' +
  '       <td>text3.2</td>\n' +
  '       <td>text3.3</td>\n' +
  '     </tr>\n' +
  '     <tr>\n' +
  '     </tr>\n' +
  '  </tbody>\n' +
  '</table>'
console.log(turndownService.turndown(table))

var tableNoHeader = '<table>\n' +
  '   <tbody>\n' +
  '     <tr>\n' +
  '       <td>text1.1</td>\n' +
  '       <td>text1.2</td>\n' +
  '       <td>text1.3</td>\n' +
  '     </tr>\n' +
  '     <tr>\n' +
  '       <td>text2.1</td>\n' +
  '       <td>text2.2</td>\n' +
  '       <td>text2.3</td>\n' +
  '     </tr>\n' +
  '     <tr>\n' +
  '       <td>text3.1</td>\n' +
  '       <td>text3.2</td>\n' +
  '       <td>text3.3</td>\n' +
  '     </tr>\n' +
  '     <tr>\n' +
  '     </tr>\n' +
  '  </tbody>\n' +
  '</table>'

console.log(turndownService.turndown(tableNoHeader))

var pic = '<picture>\n' +
  '  <source media=\'(min-width:650px)\' srcset=\'img_pink_flowers.jpg\'>\n' +
  '  <source media=\'(min-width:465px)\' srcset=\'img_white_flower.jpg\'>\n' +
  '  <img src=\'img_orange_flowers.jpg\' alt=\'Flowers\' style=\'width:auto;\'>\n' +
  '</picture>'
console.log(turndownService.turndown(pic))

var complex1 = "<div className='usJj9c'><h3><a className='l' href='https://www.nytimes.com/international/' data-ved='2ahUKEwiL4oLZm_7zAhVMOisKHU3NAsIQjBB6BAgGEAE' onMouseDown='return rwt(this,'','','','','AOvVaw1sqUESMiLV_IxPVnleBIuH','','2ahUKEwiL4oLZm_7zAhVMOisKHU3NAsIQjBB6BAgGEAE','','',event)' grepper-handle-result-click='1'>International</a></h3> <div className='zz3gNc'>World News&nbsp;- Business&nbsp;- Sports&nbsp;- Opinion&nbsp;- Technology&nbsp;- Health<br> </div> </div>"

console.log(turndownService.turndown(complex1))
