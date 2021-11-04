import { imageMarkdownFromNode, imageUrlFromSource } from './uti'

var rule = {
  filter: 'picture',

  replacement: function (content, node, options) {
    if (!node.childNodes) return ''

    let firstSource = null
    let firstImg = null

    for (let i = 0; i < node.childNodes.length; i++) {
      const child = node.childNodes[i]

      if (child.nodeName === 'SOURCE' && !firstSource) firstSource = child
      if (child.nodeName === 'IMG') firstImg = child
    }

    if (firstImg && firstImg.getAttribute('src')) {
      return imageMarkdownFromNode(firstImg, options)
    } else if (firstSource) {
      // A <picture> tag can have multiple <source> tag and the browser should decide which one to download
      // but for now let's pick the first one.
      const src = imageUrlFromSource(firstSource)
      return src ? '[[' + src + ']]' : ''
    }

    return ''
  }
}

export default function orgPicture (turndownService) {
  turndownService.addRule('orgPicture', rule)
}
