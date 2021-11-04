import orgHeading from './orgHeading'
import orgCodeBlock from './orgCodeBlock'
import orgImage from './orgImage'
import orgInlineLink from './orgInlineLink'
import tables from './tables'
import orgTables from './orgTables'
import highlightedCodeBlock from './highlighted-code-block'
import strikethrough from './strikethrough'
import taskListItems from './task-list-items'
import orgBold from './orgBold'
import orgItalic from './orgItalic'
import orgPicture from './orgPicture'

function gfm (turndownService) {
  turndownService.use([
    highlightedCodeBlock,
    strikethrough,
    tables,
    taskListItems
  ])
}

function org (turndownService) {
  turndownService.use([
    orgHeading,
    orgCodeBlock,
    orgTables,
    orgImage,
    orgInlineLink,
    orgBold,
    orgItalic,
    orgPicture
  ])
}

export {
  gfm,
  org,
  orgPicture,
  orgHeading,
  orgCodeBlock,
  orgImage,
  orgInlineLink,
  orgTables,
  strikethrough,
  tables,
  taskListItems,
  highlightedCodeBlock
}
