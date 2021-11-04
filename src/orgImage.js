import { imageMarkdownFromNode } from './uti'

var rule = {
  filter: 'img',

  replacement: function (content, node, options) {
    return imageMarkdownFromNode(node, options)
  }
}
export default function (turndownService) {
  turndownService.addRule('orgImage', rule)
}
