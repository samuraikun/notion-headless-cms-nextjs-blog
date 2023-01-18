import Layout from '@/components/Layout'
import Card from '@/components/Card'
import { fetchPages } from '@/utils/notion'
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IndexProps, Params, TagProps } from '@/types/types'
import { getMultiSelect } from '@/utils/property'

// NOTE: Notion内にあるImageは有効期限が1時間のため、ISRではなくSSRで都度データを取得する
// export const getStaticPaths: GetStaticPaths = async () => {
//   const { results }: { results: Record<string, any>[] } = await fetchPages({})

//   const pathSet: Set<string> = new Set()
//   for(const page of results) {
//     for (const tag of getMultiSelect(page.properties.tags.multi_select)) {
//       pathSet.add(tag)
//     }
//   }

//   const paths = Array.from(pathSet).map(tag => {
//     return {
//       params: { tag }
//     }
//   })

//   return {
//     paths: paths,
//     fallback: 'blocking' // Notionからのデータ取得が完了してからレンダリングするようブロッキングする
//   }
// }

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { tag } = ctx.params as Params
  const { results } = await fetchPages({ tag })
  return {
    props: {
      pages: results ? results : [],
      tag: tag
    }
    // revalidate: 10 // ISRを実行するために必要な設定。指定した秒数が経過したらfetchが走り、記事に差分があれば再ビルド
  }
}

export const Tag: NextPage<TagProps> = ({ pages, tag }) => {
  return (
    <Layout>
      <div className='pt-12'>
        <h1 className='text-5xl mb-8'>{`#${tag}`}</h1>
        <div className=' grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12'>
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Tag
