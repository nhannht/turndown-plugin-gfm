export default function orgSubscript (turndownService) {
  turndownService.addRule('orgSubscript', {
    filter: 'sub',

    replacement: function (content, node, options) {
      return '_{' + content + '}'
    }
  })
}
