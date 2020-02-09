import styled from 'styled-components'
import Img from 'gatsby-image'

import { device, colors } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

export const LocationWrapper = styled(Wrapper)`
  h1 {
    margin-bottom: 0;
  }

  p {
    text-align: center;
    max-width: 27rem;

    a {
      font-size: 1.2rem;
      font-weight: bold;
      display: block;
      font-family: 'DIN Next W1G', sans-serif;
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
  z-index: -1;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 40rem;
    top: -16rem;
    right: -11rem;
  }

  @media ${device.laptop} {
    /* -> @media (min-width: 1024px)" */
    right: 25rem;
  }
`

export const plantStyle = {
  position: 'absolute',
  margin: 'auto',
}
