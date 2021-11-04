export default function orgUnderline (turndownService) {
  turndownService.addRule('orgUnderline', {
    filter: 'u',

    replacement: function (content, node, options) {
      return '_' + content + '_'
    }
  })
}
