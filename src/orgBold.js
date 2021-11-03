var rule = {
  filter: ['strong', 'b'],

  replacement: function (content, node, options) {
    if (!content.trim()) return ''
    if (node.isCode) return content
    return '=' + content + '='
  }
}
export default function orgBold (turndownService) {
  turndownService.addRule('orgBold', rule)
}
