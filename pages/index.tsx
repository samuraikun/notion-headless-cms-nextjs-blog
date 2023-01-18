import Layout from '@/components/Layout'
import { siteConfig } from '@/site.config'
import Card from '@/components/Card'
import { fetchPages } from '@/utils/notion'
import { GetStaticProps, NextPage } from 'next'
import { IndexProps } from '@/types/types'

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({})
  return {
    props: {
      pages: results ? results : []
    },
    revalidate: 10 // ISRを実行するために必要な設定。指定した秒数が経過したらfetchが走り、記事に差分があれば再ビルド
  }
}

export const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <div className='pt-12'>
        <h1 className='text-5xl mb-8'>{siteConfig.title}</h1>
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

export default Home
