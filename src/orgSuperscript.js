export default function orgSuperscript (turndownService) {
  turndownService.addRule('orgSuperscript', {
    filter: 'sup',

    replacement: function (content, node, options) {
      return '^{' + content + '}'
    }
  })
}
