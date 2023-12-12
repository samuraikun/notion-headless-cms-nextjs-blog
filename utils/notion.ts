import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_KEY as string })
const DATABASE_ID = process.env.NOTION_DATABASE_ID as string

export const fetchPages = async ({ slug, tag }: { slug?: string, tag?: string }) => {
  const and: any = [
    {
      property: 'slug',
      rich_text: {
        is_not_empty: true
      }
    }
  ]

  if (process.env.NODE_ENV === 'production') {
    and.push({
      property: 'isPublic',
      checkbox: {
        equals: true
      }
    })
  }

  if (slug) {
    and.push({
      property: 'slug',
      rich_text: {
        equals: slug,
      }
    })
  }

  if (tag) {
    and.push({
      property: 'tags',
      multi_select: {
        contains: tag,
      }
    })
  }

  return await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: and
    },
    sorts: [
      {
        property: 'published',
        direction: 'descending'
      }
    ]
  })
}

export const fetchBlocksByPageId = async (pageId: string) => {
  const data = []
  let cursor = undefined

  while (true) {
    const { results, next_cursor }: any = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor
    })

    data.push(...results)
    if (!next_cursor) break
    cursor = next_cursor
  }

  return { results: data }
}
