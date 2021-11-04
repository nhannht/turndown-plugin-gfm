export default function orgSubscript (turndownService) {
  turndownService.addRule('orgSupscript', {
    filter: 'sup',

    replacement: function (content, node, options) {
      return '_{' + content + '}'
    }
  })
}
