export default function orgHighlight (turndownService) {
  turndownService.addRule('orgHighlight', {
    filter: 'mark',
    replacement: function (content, node, options) {
      return '*' + content + '*'
    }
  })
}
