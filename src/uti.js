export function filterLinkHref (href) {
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
export function filterImageTitle (title) {
  if (!title) return ''
  title = title.trim()
  title = title.replace(/\"/g, '&quot;')
  title = title.replace(/\(/g, '&#40;')
  title = title.replace(/\)/g, '&#41;')
  return title
}
export function imageUrlFromSource (node) {
  // Format of srcset can be:
  // srcset="kitten.png"
  // or:
  // srcset="kitten.png, kitten@2X.png 2x"

  let src = node.getAttribute('srcset')
  if (!src) src = node.getAttribute('data-srcset')
  if (!src) return ''

  const s = src.split(',')
  if (!s.length) return ''
  src = s[0]

  src = src.split(' ')
  return src[0]
}

export function imageMarkdownFromNode (node, options = null) {
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
  if (alt) {
    return src ? '[[' + src + titlePart + ']' + '[' + alt.replace(/([[\]])/g, '\\$1') + ']]' : ''
  } else {
    return src ? '[[' + src + titlePart + ']]' : ''
  }
}
