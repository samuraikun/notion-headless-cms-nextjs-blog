import { siteConfig } from '@/site.config'
import { SEOProps } from '@/types/types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

const profileImage = require('../assets/profile_logo.png')

const SEO: FC<SEOProps> = ({ title, description = '', cover = profileImage }) => {
  const metaDescription = description || siteConfig.description
  const { asPath, pathname } = useRouter()

  return (
    <Head>
      <title>
        {title} | {siteConfig.title}
      </title>
      <meta name='description' content={metaDescription} />
      <meta property='og:type' content={pathname === '/' ? 'website' : 'article'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property='og:url' content={siteConfig.url + asPath} />
      <meta property='og:image' content={cover} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${siteConfig.twitter}`} />
      <meta name="twitter:creator" content={`@${siteConfig.twitter}`} />
      <link rel="icon" type="image/png" href="/assets/favicon.ico" />
      <link rel="apple-touch-icon" href="/assets/favicon.ico" />
    </Head>
  )
}

export default SEO
