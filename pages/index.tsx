import Layout from '@/components/Layout'
import { siteConfig } from '@/site.config'
import Card from '@/components/Card'
import { fetchPages } from '@/utils/notion'
import { GetServerSideProps, NextPage } from 'next'
import { IndexProps } from '@/types/types'

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await fetchPages({})
  return {
    props: {
      pages: results ? results : []
    },
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
