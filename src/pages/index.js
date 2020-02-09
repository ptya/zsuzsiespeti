import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

// context
import ModalContext from 'components/context/ModalContext'

// components
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import After from 'components/After'
import Gallery from 'components/Gallery'
import Hero from 'components/Hero'
import Location from 'components/Location'
import Menu from 'components/Menu'
import Navigation from 'components/Navigation'
import Schedule from 'components/Schedule'
import Us from 'components/Us'
import Rsvp from 'components/Rsvp'

const IndexPage = ({ data }) => {
  const { isModal } = useContext(ModalContext)
  return (
    <Layout>
      <SEO />
      <Navigation />
      <Hero />
      <Us data={data} />
      <Schedule />
      <Menu />
      <Location />
      <After />
      <Gallery />
      {isModal && <Rsvp />}
    </Layout>
  )
}
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "photo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
