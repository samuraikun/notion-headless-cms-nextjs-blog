import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'

const Loader = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router.events, router.asPath])

  return <>{loading && <Spinner />}</>
}

export default Loader
