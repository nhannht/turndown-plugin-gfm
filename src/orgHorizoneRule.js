export default function orgHorizoneRule (turndownService) {
  turndownService.addRule('orgHorizoneRule', {
    filter: 'hr',

    replacement: function (content, node, options) {
      return '\n\n' + '-----' + '\n\n'
    }
  })
}
