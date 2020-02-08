import styled from 'styled-components'
import Img from 'gatsby-image'

import { device } from 'components/styles/variables'

const Image = styled(Img)`
  min-height: 30rem;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
  }
`

export { Image }
