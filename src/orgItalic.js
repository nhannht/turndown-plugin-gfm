var rule = {
  filter: ['em', 'i'],

  replacement: function (content, node, options) {
    if (!content.trim()) return ''
    if (node.isCode) return content
    return '/' + content + '/'
  }
}

export default function orgItalic (turndownService) {
  turndownService.addRule('orgItalic', rule)
}
