function isLinkifiedUrl (url) {
  return url.indexOf('http://') === 0 || url.indexOf('https://') === 0 || url.indexOf('file://') === 0
}

function filterLinkContent (content) {
  return content.trim().replace(/[\n\r]+/g, '<br>')
}

function getNamedAnchorFromLink (node, options) {
  var id = node.getAttribute('id')
  if (!id) id = node.getAttribute('name')
  if (id) id = id.trim()

  if (id && options.anchorNames.indexOf(id.toLowerCase()) >= 0) {
    return '<a id="' + htmlentities(id) + '"></a>'
  } else {
    return ''
  }
}
const Entities = require('html-entities').AllHtmlEntities
const htmlentities = (new Entities()).encode
function filterLinkHref (href) {
  if (!href) return ''
  href = href.trim()
  if (href.toLowerCase().indexOf('javascript:') === 0) return '' // We don't want to keep js code in the markdown
  // Replace the spaces with %20 because otherwise they can cause problems for some
  // renderer and space is not a valid URL character anyway.
  href = href.replace(/ /g, '%20')
  // Brackets also should be escaped
  href = href.replace(/\(/g, '%28')
  href = href.replace(/\)/g, '%29')
  return href
}

var rule = {
  filter: function (node, options) {
    return (
      node.nodeName === 'A' &&
      (node.getAttribute('href') || node.getAttribute('name') || node.getAttribute('id'))
    )
  },

  replacement: function (content, node, options) {
    var href = filterLinkHref(node.getAttribute('href'))

    if (!href) {
      return getNamedAnchorFromLink(node, options) + filterLinkContent(content)
    } else {
      var title = node.title && node.title !== href ? ' "' + node.title + '"' : ''
      if (!href) title = ''
      let output = getNamedAnchorFromLink(node, options) + '[[' + href + title + '][' + filterLinkContent(content) + ']]'

      if (isLinkifiedUrl(href)) {
        if (output === '[[' + href + ']]') return href
      }

      return output
    }
  }
}
export default function orgInlineLink (turndownService) {
  turndownService.addRule('orgLineLink', rule)
}
