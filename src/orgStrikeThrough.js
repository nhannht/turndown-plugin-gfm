const orgStrikeThrough = turndownService => {
  turndownService.addRule('strikethrough', {
    filter: ['del', 's', 'strike'],
    replacement: function (content) {
      return '+' + content + '+'
    }
  })
}
export default orgStrikeThrough
