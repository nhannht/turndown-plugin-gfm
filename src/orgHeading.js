import { repeat } from './utilities'
var rule = {
  filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

  replacement: function (content, node, options) {
    var hLevel = Number(node.nodeName.charAt(1))
    return '\n\n' + repeat('*', hLevel) + ' ' + content + '\n\n'
  }
}
export default function orgHeading (turndownService) {
  turndownService.addRule('orgHeading', rule)
}
