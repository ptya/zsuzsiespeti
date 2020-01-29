import React from 'react'
import PropTypes from 'prop-types'

import { Image } from './Us.styled'

const Us = ({ data }) => (
  <Image
    className="pic"
    fluid={data.imageOne.childImageSharp.fluid}
    alt="Peter Szabo"
  />
)

Us.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Us
