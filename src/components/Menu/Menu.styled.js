import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors, device } from 'components/styles/variables'
import { Wrapper } from 'components/styles/shared'

import background from 'assets/images/menu-bg-small.png'

export const MenuWrapper = styled(Wrapper)`
  background-color: ${colors.menuBg};
  background-image: url(${background});
  width: 100%;

  h2 {
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 4px;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 0.9px;
    margin: 0;
    margin-left: 10px;
    margin-right: 10px;
  }

  br {
    content: '';
    display: block;
    margin: 1.5rem;
  }

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    p {
      font-size: 1.8rem;
    }
  }
`

export const Plant = styled(Img)`
  width: 3.4rem;

  @media ${device.tablet} {
    /* -> @media (min-width: 768px)" */
    width: 6.4rem;
  }
`
