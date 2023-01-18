import ArticleMeta from '@/components/ArticleMeta'
import Block from '@/components/Block'
import Layout from '@/components/Layout'
import { ArticleProps, Params } from '@/types/types'
import { fetchBlocksByPageId, fetchPages } from '@/utils/notion'
import { getText } from '@/utils/property'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchPages({})
  const paths = results.map((page: any) => {
    return {
      params: {
        slug: getText(page.properties.slug.rich_text)
      }
    }
  })
  return {
    paths: paths,
    fallback: 'blocking' // Notionからのデータ取得が完了してからレンダリングするようブロッキングする
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params
  const { results } = await fetchPages({ slug: slug })
  const page = results[0]
  const pageId = page.id
  const { results: blocks } = await fetchBlocksByPageId(pageId)

  return {
    props: { page, blocks },
    revalidate: 10
  }
}

const Article: NextPage<ArticleProps> = ({ page, blocks }) => {
  console.log({ page })
  console.log({ blocks })
  return (
    <Layout>
      <article className='w-full'>
        {/* meta section */}
        <div className='my-12'>
          <ArticleMeta page={page} />
        </div>

        {/* article */}
        <div className='my-12'>
          {blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </div>
      </article>
    </Layout>
  )
}

export default Article
