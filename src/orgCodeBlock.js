import { isCodeBlock, isCodeBlockSpecialCase1, isCodeBlockSpecialCase2 } from './utilities'
var rule = {
  filter: function (node, options) {
    return isCodeBlock(node)
  },

  replacement: function (content, node, options) {
    let handledNode = node.firstChild
    if (isCodeBlockSpecialCase1(node) || isCodeBlockSpecialCase2(node)) handledNode = node

    var className = handledNode.className || ''
    var language = (className.match(/language-(\S+)/) || [null, ''])[1]

    return (
      '\n\n' + '#+BEGIN_SRC ' + language + '\n' +
      content +
      '\n' + '#+END_SRC' + '\n\n'
    )
  }
}
export default function orgCodeBlock (turndownService) {
  turndownService.addRule('orgCodeBlock', rule)
}
