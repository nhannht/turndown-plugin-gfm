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
import orgHighlight from './orgHighlight'
import orgSuperscript from './orgSuperscript'
import orgSubscript from './orgSubscript'
import orgUnderline from './orgUnderline'
import orgHorizoneRule from './orgHorizoneRule'
import orgStrikeThrough from './orgStrikeThrough'
import orgInlineCode from './orgInlineCode'

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
    orgPicture,
    orgHighlight,
    orgSuperscript,
    orgSubscript,
    orgUnderline,
    orgHorizoneRule,
    orgStrikeThrough,
    orgInlineCode
  ])
}

export {
  gfm,
  strikethrough,
  tables,
  taskListItems,
  highlightedCodeBlock,
  org,
  orgInlineCode,
  orgPicture,
  orgHeading,
  orgCodeBlock,
  orgImage,
  orgInlineLink,
  orgTables,
  orgSuperscript,
  orgSubscript,
  orgUnderline,
  orgBold,
  orgItalic,
  orgHighlight,
  orgHorizoneRule,
  orgStrikeThrough
}
