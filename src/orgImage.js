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
function filterImageTitle (title) {
  if (!title) return ''
  title = title.trim()
  // eslint-disable-next-line no-useless-escape
  title = title.replace(/\"/g, '&quot;')
  title = title.replace(/\(/g, '&#40;')
  title = title.replace(/\)/g, '&#41;')
  return title
}

function imageMarkdownFromNode (node, options = null) {
  options = Object.assign({}, {
    preserveImageTagsWithSize: false
  }, options)

  if (options.preserveImageTagsWithSize && (node.getAttribute('width') || node.getAttribute('height'))) {
    return node.outerHTML
  }

  var alt = node.alt || ''
  var src = filterLinkHref(node.getAttribute('src') || '')
  var title = node.title || ''
  var titlePart = title ? ' "' + filterImageTitle(title) + '"' : ''
  // return src ? '![' + alt.replace(/([[\]])/g, '\\$1') + ']' + '(' + src + titlePart + ')' : ''
  return src ? '[[' + src + titlePart + ']' + alt.replace(/([[\]])/g, '\\$1') + ']' : ''
}

var rule = {
  filter: 'img',

  replacement: function (content, node, options) {
    return imageMarkdownFromNode(node, options)
  }
}
export default function (turndownService) {
  turndownService.addRule('orgImage', rule)
}
