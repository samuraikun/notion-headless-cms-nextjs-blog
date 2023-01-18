import { BlockProps } from '@/types/types'
import { getText } from '@/utils/property'
import React, { FC } from 'react'

const Block: FC<BlockProps> = ({ block }) => {
  switch(block.type) {
    case 'heading_1':
      return <h1>{getText(block.heading_1.rich_text)}</h1>
    case 'heading_2':
      return <h2>{getText(block.heading_2.rich_text)}</h2>
    case 'paragraph':
      return <p>{getText(block.paragraph.rich_text)}</p>
    default:
      console.log(`unknown block type: ${block.type}`)
      return <></>
  }
}

export default Block
