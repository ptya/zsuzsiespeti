import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

const NotFoundPage = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>O-oo..</h1>
    </Layout>
  )
}

export default NotFoundPage
