import React from 'react'
import PropTypes from 'prop-types'

import { Image } from './Us.styled'

const Us = ({ data }) => (
  <Image fluid={data.imageOne.childImageSharp.fluid} alt="Rólunk" />
)

Us.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Us
