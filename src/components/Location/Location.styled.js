import styled from 'styled-components'
import Img from 'gatsby-image'

import { device } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

export const LocationWrapper = styled(Wrapper)`
  h1 {
    margin-bottom: 0;
  }

  p {
    text-align: center;
    max-width: 27rem;

    span {
      font-weight: bold;
      display: block;
    }
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    p {
      max-width: unset;
    }
  }
`

export const Plant = styled(Img)`
  width: 15rem;
  top: -6rem;
  right: -4.5rem;
  transform: scaleX(-1) rotate(115deg);

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 40rem;
    top: -16rem;
    right: 25rem;
  }
`

export const plantStyle = {
  position: 'absolute',
  margin: 'auto',
}
