import orgHeading from './orgHeading'
import orgCodeBlock from './orgCodeBlock'
import orgImage from './orgImage'
import orgInlineLink from './orgInlineLink'
import tables from './tables'
import orgTables from './orgTables'
import highlightedCodeBlock from './highlighted-code-block'
import strikethrough from './strikethrough'
import taskListItems from './task-list-items'

function gfm (turndownService) {
  turndownService.use([
    highlightedCodeBlock,
    strikethrough,
    tables,
    taskListItems,
    orgHeading,
    orgCodeBlock,
    orgImage,
    orgInlineLink,
    orgTables
  ])
}

export {
  gfm,
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
