import Layout from '@/components/Layout'
import Card from '@/components/Card'
import { fetchPages } from '@/utils/notion'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { IndexProps } from '@/types/types'
import Bio from '@/components/Bio'
import SEO from '@/components/Seo'

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({})
  return {
    props: {
      pages: results ? results : []
    },
    revalidate: 10 // ISRを実行するために必要な設定。指定した秒数が経過したらfetchが走り、記事に差分があれば再ビルド
  }
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { results } = await fetchPages({})
//   return {
//     props: {
//       pages: results ? results : []
//     },
//   }
// }

export const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <SEO title='All articles' />
      <div className='pt-5'>
        {/* <h1 className='text-5xl mb-8'>{siteConfig.title}</h1> */}
        {/* Bio */}
        <Bio />
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
