export default function orgInlineCode (turndownService) {
  turndownService.addRule('orgInlineCode', {

    filter: function (node) {
      var hasSiblings = node.previousSibling || node.nextSibling
      var isCodeBlock = node.parentNode.nodeName === 'PRE' && !hasSiblings

      return node.nodeName === 'CODE' && !isCodeBlock
    },

    replacement: function (content) {
      if (!content.trim()) return ''

      var delimiter = '='
      var leadingSpace = ''
      var trailingSpace = ''
      var matches = content.match(/=+/gm)
      if (matches) {
        if (/^`/.test(content)) leadingSpace = ' '
        if (/`$/.test(content)) trailingSpace = ' '
        while (matches.indexOf(delimiter) !== -1) delimiter = delimiter + '='
      }

      return delimiter + leadingSpace + content + trailingSpace + delimiter
    }
  })
}
